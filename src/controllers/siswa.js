const pool = require('../config/server')
const message = require('../helpers/message')
const res = require('../res')

const getSiswa = (request, response) => {
    pool.query('SELECT * FROM siswa ORDER BY nis ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.successGet(200, results.rows, response, message.success)
    })
}
const getSiswaById = (request, response) => {
    const nis = parseInt(request.params.nis)

    pool.query('SELECT * FROM siswa WHERE nis = $1', [nis], (error, results) => {
        if (error) {
            throw error
        }
        res.successGet(200, results.rows, response, message.found(nis))
    })
}
const createSiswa = (request, response) => {
    const { nis, nama, alamat } = request.body

    pool.query('INSERT INTO siswa (nis, nama, alamat) VALUES ($1, $2, $3)', [nis, nama, alamat], (error, results) => {
        if (error) {
            throw error
        } else {
            res.successCreated(201, response, message.success)
        }
    })
}
const updateSiswa = (request, response) => {
    const nis = parseInt(request.params.nis)
    const { nama, alamat } = request.body

    pool.query(
        'UPDATE siswa SET nama = $1, alamat = $2 WHERE nis = $3',
        [nama, alamat, nis],
        (error, results) => {
            if (error) {
                throw error
            }
            res.successCreated(200, response, message.updated(nis))
        }
    )
}
const deleteSiswa = (request, response) => {
    const nis = parseInt(request.params.nis)

    pool.query('DELETE FROM siswa WHERE nis = $1', [nis], (error, results) => {
        if (error) {
            throw error
        }
        res.successCreated(200, response, message.deleted(nis))
    })
}
module.exports = {
    getSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
}