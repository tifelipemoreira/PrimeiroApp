var Conn = require('tedious').Connection;
var config = {
  server: '192.168.1.19:1433',
  authentication: {
    type: 'default',
    options: {
      username: 'DBASuporte',
      password: 'db@C1cop41',
    }
  }
};
console.log(config);
var conn = new Conn(config);
conn.on('connect', (err) => {
  console.log(err);
});

conn.connect();


//EXECUTANDO CONSULTA...
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

function executeStatement() {  
  var id = '001201'
  request = new Request(`SELECT * FROM dbo.USUARIO_PROTHEUS U WHERE U.IDUSUARIO = ${id};`, function(err) {  
    if (err) { console.log(err);}
  });  
  var result = "";  
  request.on('row', function(columns) {  
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {  
        result+= column.value + " ";  
      }  
    });  
    console.log(result);  
      result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    
    // Close the connection after the final event emitted by the request, after the callback passes
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);  
  }