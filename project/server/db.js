// data acess object
const Mongo = require('mongodb')
let MongoClient = Mongo.MongoClient

const forms_col = 'person_details'
const eventSysetem = require('../app/browser+node/eventSystem.js')

module.exports = function({mongourl}) {

const e = eventSysetem()

let o = {
  db: null,
  ObjectId: Mongo.ObjectId,
  e
}

function ensureConnected(fn) {return function() {
  if (o.db === null) {return Promise.reject({err: 'db disconnected'})}
  return fn.apply(o, arguments)
}}

function validateForm(fn) {return function(obj){
  if (obj.form) {
    var validated_form = validate_form(obj.form)
    if (validated_form.errors.length !== 0) {
      return Promise.reject({validated_form, msg: 'invalid form'})
    }
  }
  obj.form = validated_form.form
  // validate_form populaates default values if not present
  return fn.call(this, obj)
}}


}

o.connect = function() {
  console.log('mongo connnecting...')
  return MongoClient.connect(mongourl).then(function(db){
    console.log('mongo connected') // setup db
    o.db = db
  }).catch(function(err){
    console.log('mongo connection error:', err)
    o.db = null
  })
}
o.methods = {}

o.methods.put_form = function({form}){
  return o.db.collection(forms_col)
  .insert(
    validated_form.form,
    {returnOriginal: false}
  ).then(function(res){
    return res.ops[0]
  })
}

o.methods.replace_form = function({form, _id}) {
  var
  .findOneAndReplace({
    _id: doc._id
  }, doc, {returnOriginal: false})
}



// decorate functions
Object.keys(o.methods).forEach(function(name){
  o.methods[name] = ensureConnected(o.methods[name])
})
return o


}
