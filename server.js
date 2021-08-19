const http = require('http');
const app = require('./app');
//const app = require('./aprendendo');
const port = process.env.PORT || 8017;
const server = http.createServer(app);

server.listen(port);