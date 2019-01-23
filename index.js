const express = require('express');                     //modulo carregado
let routesIndex = require('./routes/index');            //carrega index interno da pasta routes
let routesUsers = require('./routes/users');

let app = express();

//avisa que esta usando
app.use(routesIndex);
app.use('/users', routesUsers);                         //rotas de usuario comecam com /users

//porta 3000
app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');                   //quando subir
});