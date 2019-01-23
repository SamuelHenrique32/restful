const express = require('express');                     //modulo carregado
const consign = require('consign');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());                             //dados que receber via post converte para json

consign().include('routes').into(app);                  //inclui todas as rotas no app

//porta 3000
app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');                   //quando subir
});