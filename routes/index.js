//trazer variavel app atraves de biblioteca
let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=> {                             //servidor criado, require e response

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá</h1>');
});

//exportar modulo para ficar presente no index inicial
module.exports = routes;