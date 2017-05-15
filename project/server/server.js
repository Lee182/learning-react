var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var port = 3001

var flat = require('flat')
// var db = require('./db.js')
app.use( bodyParser.json() )

app.use( express.static(path.join(__dirname, '../dist')) )

app.post('/new_form', function(req,res){
  var o = flat.unflatten(req.body)
  console.log(o)
  setTimeout(function(){
    res.json({ok: true, _id: 'abc'})
  },100)
})
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port)
})
