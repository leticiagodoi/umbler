var moment = require('moment-timezone');
var express = require('express');
var app = express();

app.use((req, res, next) => { 
    if (req.headers["x-forwarded-proto"] == "http") 
        res.redirect(`https://${req.headers.host}${req.url}`);
        res.
    else 
        next(); 
});

var datetime = moment().tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm:ss a');

app.get('/', function (req, res) {
  
  res.send('Hello world!' + datetime); 
});

app.listen(3000, function () {
  console.log('Porta 3000 funcionando!');
});


