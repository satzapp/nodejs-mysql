const mysql = require('./db.config');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    mysql.query('SELECT * FROM `users` ORDER BY `id` DESC LIMIT 0,10', function (error, results) {
        if (error) throw error;
        return res.json(results);
    });
});

module.exports = router;