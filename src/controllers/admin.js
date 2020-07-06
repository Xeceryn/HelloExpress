const randToken = require('rand-token')
const pool = require('../config/server')
const message = require('../helpers/message')
const res = require('../res')
const createAdmin = (request, response) => {
    const { username, password } = request.body

    pool.query('INSERT INTO admin (username, password) VALUES ($1, $2)', [username, password], (error, results) => {
        if (error) {
            throw error
        } else {
            res.successCreated(201, response, message.success)
        }
    })
}
const loginAdmin = (request, response) => {
    const { username, password } = request.body

    pool.query('SELECT * FROM admin WHERE username = $1 AND password = $2', [username, password], (error, results) => {
        var token = randToken.generate(16)
        const session = {
            username: username,
            access_token: token
        }
        if (error) {
            throw error
        }
        res.successGet(200, session, response, message.found(username))
    })
}
module.exports = {
    createAdmin,
    loginAdmin
}