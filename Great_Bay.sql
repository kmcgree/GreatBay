DROP DATABASE IF EXISTS Great_BayDB;

CREATE DATABASE Great_BayDB;

USE Great_BayDB;

CREATE TABLE Post_Item (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(255) NULL,
  minimum_bid INT(255) NULL,
  current_bid INT(255) NULL,
  PRIMARY KEY (id)
);







