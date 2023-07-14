// const mysql = require('mysql2');
// const knex = require('knex');
// const connection = knex({
//   client: 'mysql', 
//   connection: {
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'shipmentdatabase',
//   },
// });

// // Connect to the MySQL database
// connection
//   .raw('SELECT 1+1 as result')
//   .then((result) => {
//     console.log('Database connected successfully');
//   })
//   .catch((error) => {
//     console.error('Error connecting to the database:', error);
//   });
// module.exports=connection;