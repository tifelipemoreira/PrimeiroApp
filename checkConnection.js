const attr = require('./nodemon.json');
const oracledb = require('oracledb');

async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user: attr.env.ORACLE_USER,
        password: attr.env.ORACLE_PASSWORD,
        connectString: attr.env.ORACLE_CONNSTRING
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();