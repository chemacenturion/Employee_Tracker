const connection = require("./connections");
// start creating functions for prompts (tutor assisted)
function viewAllDepartments() {
    return connection.query("SELECT * FROM department", (err,results) => {
        console.table(results);
    })
};

function viewAllRoles() {
    return connection.query("SELECT * FROM role", (err, results) => {
        console.table(results);
    })
};

function viewAllEmployees() {
    return connection.query("SELECT * FROM employee", (err, results) => {
        console.table(results);
    })
};


module.exports = {viewAllDepartments, viewAllRoles, viewAllEmployees}