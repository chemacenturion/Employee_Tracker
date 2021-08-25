DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- to hold department name
    name VARCHAR(30) NOT NULL, 
)

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- to hold role title
    title VARCHAR(30) NOT NULL,
    -- to hold role salary
    salary DECIMAL,
    -- to hold reference
    department_id INT,
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- to hold employees first name
    first_name VARCHAR(30) NOT NULL,
    -- to hold employees last name
    last_name VARCHAR(30) NOT NULL,
    -- to hold reference to employee role
    role_id INT,
    -- to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
    manager_id INT,
)
