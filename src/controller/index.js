'use strict';

var response = require('../res/res');
var connection = require('../server/server');

exports.users = function (req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields) {
        if (error) {
            console.log('[error]', error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.index = function (req, res) {
    response.ok("Service running!", res)
};