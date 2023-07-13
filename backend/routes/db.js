const mysql = require('mysql2');
// Create a MySQL database connection
// const connection = mysql.createConnection({
//   host: 'localhost', // Replace with your MySQL server host
//   user: 'root', // Replace with your MySQL username
//   password: 'root', // Replace with your MySQL password
//   database: 'shipmentdatabase' // Replace with your MySQL database name
// });
const knex = require('knex');
const connection = knex({
  client: 'mysql', // Replace with your database client
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shipmentdatabase',
  },
});

// Connect to the MySQL database
connection
  .raw('SELECT 1+1 as result')
  .then((result) => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
module.exports=connection;