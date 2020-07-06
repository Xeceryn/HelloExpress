const db = require('../controllers')

module.exports = function (app) {
    // default
    app.get('/', db.defaultView)
    // users
    app.get('/users', db.getUsers)
    app.get('/users/:id', db.getUserById)
    app.post('/users', db.createUser)
    app.put('/users/:id', db.updateUser)
    app.delete('/users/:id', db.deleteUser)
    // admin
    app.post('/admin', db.createAdmin)
    app.post('/admin/login', db.loginAdmin)
    // siswa
    app.get('/siswa', db.getSiswa)
    app.get('/siswa/:nis', db.getSiswaById)
    app.post('/siswa', db.createSiswa)
    app.put('/siswa/:nis', db.updateSiswa)
    app.delete('/siswa/:nis', db.deleteSiswa)
}