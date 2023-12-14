CREATE DATABASE myPlatform;
USE myPlatform;



CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,  
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    coin_id VARCHAR(255),
    coin_name VARCHAR(255),
    coin_symbol VARCHAR(255),
    coin_image VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


