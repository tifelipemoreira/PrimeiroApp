//Chame o módulo  HTTP
var http = require("http")

//Crie um servidor HTTP para ouvir as requisições na porta 8000

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Primeiro Teste na AWS - 16082021 - Jekins 01');
  res.end();
}).listen(8017);

console.log('Primeio teste na AWS - ')
