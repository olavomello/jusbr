var http = require("http");
var express = require("express");

// Static files
//app.use(express.static('src'));

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

// 
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Server started...\n");
    res.write("Data : \n");
    res.write(data);
    res.end("");
}).listen(3000);

console.log("Server started !");