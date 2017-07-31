const express = require('express')
const server = express()

server.use(express.static('public'))

server.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
