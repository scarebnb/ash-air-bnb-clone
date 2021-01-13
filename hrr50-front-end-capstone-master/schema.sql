CREATE DATABASE IF NOT EXISTS airBnB;

USE airBnB;

CREATE TABLE images(
  id INT AUTO_INCREMENT PRIMARY KEY,
  listing text,
  favorites number,
  url text
);