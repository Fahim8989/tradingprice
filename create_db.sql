CREATE DATABASE myPlatform;
USE myPlatform;
CREATE TABLE books (id INT AUTO_INCREMENT,name VARCHAR(50),price DECIMAL(5, 2) unsigned,PRIMARY KEY(id));
INSERT INTO books (name, price)VALUES('database book', 40.25),('Node.js book', 25.00), ('Express book', 31.99) ;
CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'app2027';
GRANT ALL PRIVILEGES ON myPlatform.* TO 'appuser'@'localhost';
CREATE TABLE userDetails (id INT AUTO_INCREMENT, username VARCHAR(50) UNIQUE NOT NULL, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(100) UNIQUE NOT NULL, hashedPassword VARCHAR(255) NOT NULL, PRIMARY KEY (id));