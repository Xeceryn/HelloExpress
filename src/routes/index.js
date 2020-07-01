const db = require('../controllers')

module.exports = function (app) {
    app.get('/', db.defaultView)
    app.get('/users', db.getUsers)
    app.get('/users/:id', db.getUserById)
    app.post('/users', db.createUser)
    app.put('/users/:id', db.updateUser)
    app.delete('/users/:id', db.deleteUser)
}