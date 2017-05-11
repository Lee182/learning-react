// Verify form.cson
// if somethings up throw an error like more than one id..., and fills in any defaults based on rules in form.cson

const cson = require('cson')
const fs = require('fs')
const path = require('path')

var cson_str = fs.readFileSyc(path.resolve('./form.cson'))
cson.parse(cson_str, function(o){
  console.log(o)
})
