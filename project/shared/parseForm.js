// Verify form.cson
// if somethings up throw an error like more than one id..., and fills in any defaults based on rules in form.cson

const cson = require('cson')
const fs = require('fs')
const path = require('path')

form_path = path.join(__dirname, 'form.cson')
out_path = path.join(__dirname, 'form.json')

Promise.resolve()
  .then(readForm)
  .then(parseForm)
  .then(function(o){
    console.log(o)
    return o
  })
  .then(writeOut)
  .catch(function(err){
    console.log(err)
    process.exit()
  })

function readForm() {return new Promise(function(resolve,reject){
  fs.readFile(form_path, 'utf8', function(err, buf){
    if (err) {
      return reject({err, message: 'readForm'})
    }
    resolve(buf.toString())
  })
})}

function parseForm(cson_str) {return new Promise(function(resolve, reject){
  cson.parseCSONString(cson_str, function(err, o){
    if (err) {
      return reject({err, message: 'Error: cson.parseCSONString'})
    }
    let out = Object.keys(o).reduce(function(arr, section, i){
      var inputs = []
      Object.keys(o[section].inputs).forEach(function(input, i){
        inputs.push(o[section].inputs[input])
      })
      o[section].inputs = inputs
      arr.push(o[section])
      return arr
    }, [])

    resolve(out)
  })
}) }

function writeOut(o) {
  fs.writeFileSync(out_path, JSON.stringify(o, null, 2))
}

function ensureUniqueIds(ids) {
  var id_set = new Set()
  var id_duplicates = new Set()
  ids.forEach(function(id){
    var size_old = id_set.size
    id_set.add(id)
    if (id_set.size === size_before){
      id_duplicates.add(id)
    }
  })
  if (id_duplicates.size > 0) {
    return Promise.reject({
      err: id_duplicates,
      message: 'ensureUniqueIds id duplicates'
    })
  }
  return Promise.resolve(id_set)
}
