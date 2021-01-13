CREATE DATABASE IF NOT EXISTS airBnB;

USE airBnB;

CREATE TABLE images(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name text,
  favorites INT NOT NULL,
  url text
);