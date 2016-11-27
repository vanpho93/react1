var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, ()=>console.log('Server started'));

app.get('/', (req, res)=>res.render('homepage'));

var arr = [1, 4, 5, 6, 3, 1];
// arr.forEach(function(e){
//   console.log(e);
// })

// arr.forEach((e) => console.log(e));

var gt = arr.findIndex((e)=>e==6)

console.log(gt);
