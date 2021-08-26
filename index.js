const figlet = require('figlet');
const inquirer = require('inquirer');
const connection = require("./db/connections")
const requiredFunctions = require("./db/requiredFunctions")
require("console.table")

// figlet('Employee Tracker', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });


function init() {

    inquirer
        .prompt({
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: [
                "View ALL departments",
                "View ALL roles",
                "View ALL employees",
                // "Add a department",
                // "Add a role",
                // "Add an employee",
                // "Update an employee role",
                "End Employee Tracker"
            ]
        }).then(response => {
            if (response.menu === "View ALL departments") {
                viewAllDepartments()
            } else if (response.menu === "View ALL roles") {
                viewAllRoles();
            } else if (response.menu === "View ALL employees") {
                viewAllEmployees();
            } else if (response.menu === "End Employee Tracker") {
                connection.end();
            }
        });
}

init();

function viewAllDepartments() {
    return connection.query("SELECT * FROM department", (err,res) => {
        console.table(res)
        init()
    })
};
// func() for viewAllRoles input
function viewAllRoles() {
    return connection.query("SELECT * FROM role", (err, res) => {
        console.table(res)
        init()
    })
};
// func() for viewAllEmps input
function viewAllEmployees() {
    return connection.query("SELECT * FROM employee", (err, res) => {
        console.table(res)
        init()
    })
};