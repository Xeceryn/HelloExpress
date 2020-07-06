const package = require('../../package.json')
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('./users')
const { createAdmin, loginAdmin } = require('./admin')
const {
    getSiswa, 
    getSiswaById, 
    createSiswa,
    updateSiswa,
    deleteSiswa
} = require('./siswa')
const defaultView = (request, response) => {
    response.json({
        name: package.name,
        description: package.description,
        version: package.version,
        author: package.author
    })
}
module.exports = {
    defaultView,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createAdmin,
    loginAdmin,
    getSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
}