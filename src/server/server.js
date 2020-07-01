const { Client } = require('pg')
const server = new Client({
  user: 'rkfeitexlcbxxg',
  host: 'ec2-184-73-192-172.compute-1.amazonaws.com',
  database: 'd976u6oh61ei83',
  password: 'eb5c0bf57d9def02ae5545a40d732ffb10ce17a2f2d280034a9f807fd424e1f8',
  port: 5432
})

server.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

module.exports = server