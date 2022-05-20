const mysql = require('mysql');
// connection configurations
const dbConnection = mysql.createConnection({
     host: 'localhost',
     user: 'leoteste',
     password: 'qwe123',
     database: 'a1_api',
     port: 3306,
     queueLimit : 0, // unlimited queueing
     connectionLimit : 0 // unlimited connections 
 });
 // connect to database
 function getConnection(){
    let con=dbConnection.connect();
    return con; 
 }
 

 module.exports = getConnection