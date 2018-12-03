// dependency for inquirer and mysql npm packages
var inquirer = require("inquirer");
var mysql = require("mysql");
var quantity = 0;
var promptCustomer = true;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tarpley1",
    database: "bamazon_db"
  });


// recursive function 
var sellProduct = function() {
  if (promptCustomer) {
    
    console.log("\nEnter a product from the list.\n");
    inquirer.prompt([
      {
        name: "product",
        message: "Enter product: "
      }, {
        name: "quantity",
        message: "Enter quantity: "
      }
    ]).then(function(answers) {
      connection.query(
        "SELECT * FROM products where ?",
        [
          {
            product_name: answers.product
          }
        ], function(err, res) {
        if(answers.quantity <= res[0].stock_quantity ){
          var newDBQuanitiy = res[0].stock_quantity - answers.quantity;
          // console.log("Do work - reduce quantity in DB");
          var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                  stock_quantity: newDBQuanitiy
              },
              {
                  id: res[0].id
              }
            ],
            function(err, res) {
              console.log(res.affectedRows + " products updated!\n");
              connection.end();
            }
          );
          
          promptCustomer = false;
        }
        else{
        console.log("\nWe only have " + res[0].stock_quantity +" left\n");
        // console.log("Enter " + res[0].stock_quantity + " or less.\n");

        sellProduct();
        }
        
    })
  })
  }
  else{
    console.log("In the sellProduct else");
  }
  
}

console.log("\n");
connection.query("SELECT * FROM products", 
    function(err, res) {
      console.log("product_name");
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].product_name);
      }
      sellProduct();
    });
