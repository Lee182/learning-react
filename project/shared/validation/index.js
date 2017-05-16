var moment = require('moment')
var isEmail = require('sane-email-validation')

module.exports = {
  email: function(str) {
    var o = {}
    o.input = str
    o.errors = []
    if ( !isEmail(str) ) {
      o.errors.push('E-mail address invalid')
    }
    o.output = str
    return o
  },
  phone: function(str) {
    var o = {input:str}
    o.output = str.split('').filter(function(char){
      if (char === ' ') {return false}
      return isNaN(Number(char)) === false
    }).join('')
    if (o.output.length < 11) {
      return 'Phone Number is too short'
    }
    return o
  },
  house_number: function(str) {
    // number is a integer > 0
    var o = {}
    o.input = str
    o.errors = []
    var n = Number(str)
    if (isNaN(n)) {
      o.errors.push('House number should be a number')
      return o
    }
    if (Math.floor(n) !== n){
      o.errors.push('House number should be a integer')
    }
    if (n <= 0) {
      o.errors.push('House number should be greater than 0')
    }
    o.output = n
    return o
  },
  // post_code: '',
  moment_date: function moment_date(str){
    var o = {input: str}
    var d = moment(str, 'YYYY-MM-DD')
    if (d._isValid === false) {
      o.errors.push('Date Invalid, format is YYYY-MM-DD')
      return o
    }
    o.output = d._d
    return o
  }
  // date_recent: '',
}
