CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(ItemId int PRIMARY KEY AUTO_INCREMENT,
					  ProductName varchar(45) NOT NULL,
					  DepartmentName varchar(35) NOT NULL,
					  Price int NOT NULL,
					  stockquantity int NOT NULL);


INSERT INTO Products(ProductName,DepartmentName,Price, stockquantity),
VALUES ("Guitar","Instruments",499.99,50),("Saxophone","Instruments", 984.77,13),
	   ("Trumpet","Instruments",452.21,5),("French Horn","Instruments",214.62,15),
	   ("X-Box One","Electronics", 399.99, 10),("Playstation 4","Electronics",299.99,40),
	   ("Bamazon Prime","Subscription",19.99,100),("Bamazon Online Magazine","Subscription",19.99,100),
	   ("Think Pad", "Electronics", 987.98,10),("Microsoft Pro 3","Electronics",899.99,15);

SELECT * FROM products;
}
