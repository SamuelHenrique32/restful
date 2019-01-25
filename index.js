const express = require('express');                     //modulo carregado
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());                             //dados que receber via post converte para json

app.use(expressValidator());

//inclui todas as rotas no app
//inclui agora tambem o utils
consign().include('routes').include('utils').into(app);

//porta 3000
app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');                   //quando subir
});