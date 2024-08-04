const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config();

var conn = mysql.createConnection({
    host: 'localhost',
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: 'db_manage',
    port: process.env.SQL_PORT
});

conn.connect(function(err){
    if(!err)
            console.log("db connected...")
    else
        throw err;
})
module.exports = conn;