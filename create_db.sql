DROP DATABASE IF EXISTS myPlatform;

CREATE DATABASE myPlatform;
USE myPlatform;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,  
    password VARCHAR(255) NOT NULL
);


CREATE TABLE books (
    id INT AUTO_INCREMENT,
    name VARCHAR(50),
    price DECIMAL(5, 2) UNSIGNED,
    PRIMARY KEY(id)
);

INSERT INTO books (name, price)
VALUES ('database book', 40.25),
       ('Node.js book', 25.00),
       ('Express book', 31.99);

CREATE USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
GRANT ALL PRIVILEGES ON myPlatform.* TO 'root'@'localhost';


CREATE TABLE userDetails (
    id INT AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    hashedPassword VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);