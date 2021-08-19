const db = require('oracledb');
const attr = require('./nodemon.json');
db.outFormat = db.OUT_FORMAT_OBJECT;

async function connDB() {
  let conn;

  try {
    conn = await db.getConnection({
      user: attr.env.ORACLE_USER,
      password: attr.env.ORACLE_PASSWORD,
      connectString: attr.env.ORACLE_CONNSTRING
    });

    const result = await conn.execute(
      `
      SELECT * FROM USER_PROTHEUS_CICOPAL U
      WHERE U.ID = :id
      `,
      ['001201']
    );

    console.log( result.rows );
  } catch (err) {
    console.error(err);
  } finally {
    if(conn) {
      try {
        await conn.close();
      } catch (e) {
        console.error(e);
      }
    }
  }
}

connDB();