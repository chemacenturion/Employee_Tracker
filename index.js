const figlet = require('figlet');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require("./db/connections")
const employeeIndex = require("./db/employeeIndex")


figlet('Employee Tracker', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

employeeIndex.viewAllEmployees()

