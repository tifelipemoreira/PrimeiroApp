//Chame o módulo  HTTP
var http = require("http")

//Crie um servidor HTTP para ouvir as requisições na porta 8000

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Primeiro App');
  res.end();
}).listen(80);

console.log('Ouvindo a porta 80')