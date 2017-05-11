const express = require('express')
const path = require('path')
const PORT = 3000

let app = express()

app.use('/', express.static(path.resolve('dist')))

app.listen(PORT, function(){
  console.log('server listening at http://localhost:'+PORT)
})
