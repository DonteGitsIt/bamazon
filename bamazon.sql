DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(75) NULL,
  department_name VARCHAR(75) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Supreme t-shirt", "clothing", 49.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kappa jacket", "clothing", 120.00, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gucci slides", "clothing", 60.00, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox-one", "gaming", 299.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 4", "gaming", 299.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red-Dead Redemption 2", "gaming", 59.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spiderman", "gaming", 59.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tesla Model 3", "vehicles", 46000.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Porsche Cayenne", "vehicles", 65700.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lamborghini Aventador S Roadster", "vehicles", 460000.00, 25);