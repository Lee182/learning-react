var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

// var data = [
//   {title: 'Shopping', detail: 'Milk'},
//   {title: 'Hair cut', detail: '13:00'},
//   {title: 'Learn React', detail: '15:00'}
// ]
// var data = []
// process.argv.forEach((str,i)=>{
//   if (i <= 2) {return}
//   if (i % 2 !== 0) {
//     data.unshift({title: str})
//   } else {
//     data[0].detail = str
//   }
// })
data = [
  {title: 'Shopping'},
  {title: 'Hair cut'}
]
process.argv.forEach((str,i)=>{
  if (i <= 2) {return}
  data[i-3].detail = str
})

app.use('/', function(req, res) {
  res.render('index', {data});
});

app.listen(app.get('port'), function() {});
