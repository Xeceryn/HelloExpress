const pool = require('../config/server')
const package = require('../../package.json')
const message = require('../helpers/message')
const res = require('../res')

const defaultView = (request, response) => {
    response.json({
        name: package.name,
        description: package.description,
        version: package.version,
        author: package.author
    })
}
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.successGet(200, results.rows, response, message.success)
    })
}
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.successGet(200, results.rows, response, message.found(id))
    })
}
const createUser = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email], (error, results) => {
        if (error) {
            throw error
        } else {
            const newCreatedId = results.rows[0].id
            res.successCreated(201, response, message.created(newCreatedId))
        }
    })
}
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.successCreated(200, response, message.updated(id))
        }
    )
}
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.successCreated(200, response, message.deleted(id))
    })
}
module.exports = {
    defaultView,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}