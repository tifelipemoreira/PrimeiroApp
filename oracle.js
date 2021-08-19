const db = require('oracledb')
const attr = require('./nodemon.json')

var pool = db.createPool({
  user            : attr.env.ORACLE_USER,
  password        : attr.env.ORACLE_PASSWORD,
  connectString   : attr.env.ORACLE_CONNSTRING
})

console.log(`Conectado no ORACLE ${ attr.env.ORACLE_PORT }`);

//exports.pool = pool;
module.exports;