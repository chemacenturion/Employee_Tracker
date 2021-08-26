const mysql = require('mysql2');
require('dotenv').config();

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "tracker_db",
  password: "rootr00t!"
});
console.log()
module.exports = connection;