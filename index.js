const express = require('express');                     //modulo carregado
const consign = require('consign');

let app = express();

//inclui todas as rotas no app
consign().include('routes').into(app);

//porta 3000
app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');                   //quando subir
});