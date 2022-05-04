//Check if dont have a connection open
//if (global.connection && global.connection.state!=='disconnected') return global.connection;
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwe123",
    database: "a1_database",
    port: "3306"
});
function dbConnect() {
    connection.connect((err) => {
        if (err) {
            // console.log(err);
            throw err;
        }
        // console.log('<Connected>');
        // connection.end();
        return '<Connected>';
    });

}
function dbClose(){
    connection.end();
}

module.exports = dbConnect;
