const express = require('express')

var app = express(); 
var server = app.listen(4000,function(){ 
  console.log('listening to request on port 40000');
});


app.use(express.static('src'));



