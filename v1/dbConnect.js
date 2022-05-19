const mysql = require('mysql');
// connection configurations
const dbConnection = mysql.createConnection({
     host: 'localhost',
     user: 'leoteste',
     password: 'qwe123',
     database: 'a1_api',
     port: 3306
 });
 // connect to database
 function getConnection(){
    return dbConnection.connect(); 
 }
 

 module.exports = getConnection;