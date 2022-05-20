var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// connection configurations
const mysql = require('mysql');
// connection configurations
const db = mysql.createConnection({
    host: 'localhost',
    user: 'leoteste',
    password: 'qwe123',
    database: 'a1_api',
    port: 3306,
    queueLimit: 0, // unlimited queueing
    connectionLimit: 0 // unlimited connections 
});
// connect to database
db.connect();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// default route
app.get('/', function (req, res) {
    console.log('***************** The server work! *****************');
    return res.send({ error: true, message: 'The server work!' })
});


// receive query
app.get('/:getQuery', function (req, res) {
    let tmpQuery = req.params.getQuery;

    console.log('**************** RESULT ******************');
    console.log(tmpQuery);
    let tmp = JSON.parse(tmpQuery);
    console.log("sql: " + tmp.sql);
    db.query(tmp.sql, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'receive query.' });
    });

});





/*


// Retrieve all users 
app.get('/users', function (req, res) {
    db.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});


// Retrieve user with id 
app.get('/user/:id', function (req, res) {
    let user_id = req.params.id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'users list.' });
    });
});
// Add a new user  
app.post('/user', function (req, res) {
    let user = req.body.user;
    if (!user) {
        return res.status(400).send({ error: true, message: 'Please provide user' });
    }
    dbConn.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
});
//  Update user with id
app.put('/user', function (req, res) {
    let user_id = req.body.user_id;
    let user = req.body.user;
    if (!user_id || !user) {
        return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
    }
    dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
    });
});
//  Delete user
app.delete('/user', function (req, res) {
    let user_id = req.body.user_id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
    });
});
*/
// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;