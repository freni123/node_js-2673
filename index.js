// fs module.

var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){
    fs.readFile('./index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(9009);

// express using server
var express = require('express');
var app = express();

app.get('/',(req,res)=> {
    res.send(200,'Server is Running');
    console.warn('Server is Running');
    res.end()
}).listen(4500);