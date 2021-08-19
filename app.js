const express = require('express');
const morgan = require('morgan');
const app = express();
//const bodyParser = require('body-parser');

const routeUser = require('./routes/users_ORACLE');


//Para acompanhar no Terminal as Requisições realizadas
app.use(morgan('dev'));

//Os 2 métodos abaixo é caso eu queira passar parametros atraves do JSON
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser,json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //Caso queira que seja acessível somente pelo servidor alterar o '*' pelo servidor '192.168.1.3...'
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requerested-With, Content-Type, Accept, Authorization'
  );

  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //Somente aceitará os VERBOS declarados
    return res.status(200).send({});
  }

  next();
})


//Rotas definidas para ser chamadas
app.use('/user', routeUser);

//Rota que será chamada, caso seja chamada uma rota inexistente
app.use((req, res, next) => {
  const erro = new Error('Não encontrado! Informar a rota...');
  erro.status = 404;
  next(erro);
})

//Caso de algum erro dentro da execução de uma das rotas definidas acima
app.use((err, req, res, next) => {
  res.status(err.status || 500);
    return res.send({
      erro: {
        mensagem: err.message
      }
    })
})

module.exports = app;