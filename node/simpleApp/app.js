var express = require('express');
var app = express();

// 
app.get('/simpleapp/api/v1/hello', function(req,res){
    res.send('Hello Client');
});


app.listen(3000, function(){
    console.log(' Simple App is running')
});


//localhost:3000/simpleapp/api/v1/hello