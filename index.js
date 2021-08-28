const figlet = require('figlet');
const inquirer = require('inquirer');
const connection = require("./db/connections")
require("console.table")

figlet('Employee Tracker', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    init();
});


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
                "Add a department",
                "Add a role",
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
            } else if (response.menu === "Add a department") {
                addDepartment();
            } else if (response.menu === "Add a role") {
                addRole();
            } else if (response.menu === "End Employee Tracker") {
                connection.end();
            }
        });
}

//  func() for viewALlDepts input
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
// func() for addDepartment input
async function addDepartment() {
    await inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What is the name of the department?",
        })
        .then((response) => {
            connection.query(`INSERT INTO department(name) VALUES (?)`, response.department, (err, results) => {
                if (err) {
                    console.log(err)
                }
            });
        });
    init()
};
// func() for addDepartment input
async function addRole() {
    // return connection.query("SELECT * FROM role", (err, res) => {
    //     console.table(res);
    // });

    await inquirer
        .prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of the role?",
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the role?",
        },
        {
            name: "id",
            type: "input",
            message: "what is the department id?"
        },
        ])
        .then((response) => {
            connection.query(`INSERT INTO role(title, salary, department_id) VALUES (???)`, response.title, response.salary, response.id, (err, results) => {
                if (err) {
                    console.log(err)
                }
            });
        });
    init()

};
