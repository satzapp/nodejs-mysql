const mysql = require('mysql');

module.exports = mysql.createPool({
        connectionLimit : 2,
        host: 'localhost',
        user: 'user',
        password: 'pass',
        database: 'rest-api'
    });
    