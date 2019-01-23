const express = require('express');                     //modulo carregado

let app = express();

app.get('/', (req, res)=> {                             //servidor criado, require e response

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá<h1>');
});

app.get('/users', (req, res)=> {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({                                          //express permite tirar stringfy

        users:[{
            name:'Hcode',
            email:'contato@hcode.com.br',
            id:1
        }]
    });

});

//porta 3000
app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');                   //quando subir
});