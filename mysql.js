const sql = require('mysql');
var pool = sql.createPool({
  'user'      : process.env.SQL_USER,
  'password'  : process.env.SQL_PASSWORD,
  'database'  : process.env.SQL_DATABASE,
  'host'      : process.env.SQL_HOST,
  'port'      : process.env.SQL_PORT
});

console.log('Conectado com SQLSERVER!!!');

exports.pool = pool;