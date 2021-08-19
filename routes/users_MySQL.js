const express = require('express');
const router = express.Router();
const sql =  require('../mysql').pool;


//RETORNA TODOS OS USUÁRIOS
router.get('/',(req, res, next) => {
  res.status(200).send({
    mensagem: 'Retorna todos os usuários'
  });
});

//RETORNA USUÁRIO POR ID
router.get('/:id_user', (req,res, next) => {
  sql.getConnection((error, conn) => {

    if(error) { return res.status(500).send({ error: error }) }
    
    conn.query(
      'SELECT * FROM dbo.USUARIO_PROTHEUS U WHERE U.IDUSUARIO = ?;',
      [req.params.id_user],
      (error, result, fields) => {
        if(error) { return res.status(500).send({ error: error }) }
        return res.status(200).send({ response: result })
      }
    )
  });
});

module.exports = router;