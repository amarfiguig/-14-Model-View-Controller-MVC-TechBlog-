// Import necessary modules
require('dotenv').config();
const Sequelize = require('sequelize');

// Set up database connection
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // If using JawsDB for hosting, connect to it
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost', // If running locally, set host to 'localhost'
      dialect: 'mysql', // Set dialect to MySQL
      port: 3306 // Set port number to 3306 (default MySQL port)
    });
    
// Export the configured database connection
module.exports = sequelize;
