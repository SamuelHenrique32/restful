const http = require('http');                    //modulo carregado

let server = http.createServer((req, res)=>{     //servidor criado, require e response

    console.log('URL: ', req.url);

    console.log('METHOD: ', req.method);

    //dependendo da url, possui resultado diferente

    switch (req.url) {

        case '/':

            res.statusCode = 200;                //deu certo
            //processar como html
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Olá<h1>');

            break;

        case '/users':

            res.statusCode = 200;                //deu certo
            //processar como json
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({

                users:[{
                    name:'Hcode',
                    email:'contato@hcode.com.br',
                    id:1
                }]
            }));

            break;
    }
});

//porta 3000
server.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');           //quando subir
});