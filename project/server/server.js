var express = require('express')
var path = require('path')
var app = express()
var port = 3001

app.use(express.static('./dist'))

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port)
})
