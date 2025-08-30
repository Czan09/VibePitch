const mysql = require("mysql2/promise");

// Create a connection pool (better than single connection)
const db = mysql.createPool({
  host: "localhost",       // Database host
  user: "root",            // Your MySQL username
  password: "Hinata1234#",// Your MySQL password
  database: "vibepitch"// The database you created
});

module.exports = db;
