DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("PeaShooter", 12.50, 10);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Machete", 22.50, 16);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Sword", 12.00, 10);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Straw", 1.50, 100);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Grenade", 42.50, 18);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("YoYo", 2.50, 11);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Spooge", 77.50, 10);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Widget", 15.50, 1000);


select * from products;