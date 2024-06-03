CREATE DATABASE Repletos01;

USE Repletos01;

CREATE TABLE Productos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto VARCHAR(50) NOT NULL,
    ingredientes VARCHAR(50) NOT NULL,
    precio  INT
);

SELECT * FROM Productos;

CREATE USER 'repletos01'@'localhost' IDENTIFIED BY 'prueba01';
GRANT ALL PRIVILEGES ON repletos01.* TO 'repletos01'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'repletos01'@'localhost';