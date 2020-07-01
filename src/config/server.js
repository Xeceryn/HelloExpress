const Pool = require('pg').Pool
const pool = new Pool({
    user: 'adit3klan',
    host: 'localhost',
    database: 'api',
    password: '    ',
    port: 5432,
})
module.exports = pool