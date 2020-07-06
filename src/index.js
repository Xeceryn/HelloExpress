const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const routes = require('./routes')
const port = 3000

app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: true }))

routes(app)

app.listen(port, () => {
  console.log(`[Service run on ${port}]`)
})