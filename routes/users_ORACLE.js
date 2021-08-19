const express = require('express');
const router = express.Router();
const db = require('oracledb');

db.outFormat = db.OUT_FORMAT_OBJECT;

const poolDB = db.createPool({
  user: 'sigates',
  password: 'sigates',
  connectString: '192.168.1.3:1521/siga'
});

//RETORNA USUÁRIO POR ID
router.get('/:id_user', (req,res) => {

  poolDB.then(
    db.getConnection((err, conn) => {
      if(err) { res.status(500).send({ error: err }) };
      conn.execute(
        `SELECT * FROM USER_PROTHEUS_CICOPAL U WHERE U.ID = :id`,
        [ req.params.id_user ],
        (e, result) => {
          if(e) { res.status(500).send({ error: e.message }) };
          return res.status(200).send({ response: result.rows });
        }
      );
    })
  );

});

module.exports = router;