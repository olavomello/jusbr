﻿var http = require("http");
var express = require("express");


var port = 3000;
// app.set( "port", ( process.env.PORT || 3000 ));


// Static files
//app.use(express.static('src'));

/*
// HTTP Options
var options = {
    host: "www.jusbrasil.com.br",
    path: "/topicos/2364939/uol"
}
var data = "";
// Start request
var request = http.request( options, function (res) {
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        // console.log(data);
    });
});
// Request error control
request.on('error', function (e) {
    data = "Erro : " + e.message;
});
request.end();
*/

// 
data = "Teste";
http.createServer(function (req, res) {
    
    // Header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Body
    res.write("Server started...\n");
    res.write("Data : \n");
    res.write(data);
    
    // End
    res.end("");
}).listen(port);

console.log("Server started !");