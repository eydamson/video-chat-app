var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;
 
app.get('/', function(req, res, next) { res.send('Welcome to rtc server!'); });
 
var port = 8080;

var server = app.listen(port, function(){
  console.log(port);
});

var options = {
    debug: true
}
 
app.use('/api', ExpressPeerServer(server, options));