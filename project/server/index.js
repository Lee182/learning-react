var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
const port = 9004

var flat = require('flat')
var db = require('./db.js')({
  mongourl: 'mongodb://localhost:27017/react'
})
app.use( bodyParser.json() )

app.use( express.static(path.join(__dirname, '../dist')) )

app.post('/new_form', function(req,res){
  var o = flat.unflatten(req.body)
  console.log(o)
  db.methods.put_form({form: o}).then(function(res){
    res.json({ok: true, _id: res._id, res})
  }).catch(function(err){
    res.json({ok: false, err})
  })
})
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port)
})
