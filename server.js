const express = require('express')
const server = express()
const fs = require('fs')

server.use(express.static('public'))

server.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function htmlInit(titleText){
  fs.writeFile('./public/view.html', "<html><head><title>"+titleText+"</title></head><body></body></html>", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}