const http = require('http');                    //modulo carregado

let server = http.createServer((req, res)=>{     //servidor criado, require e response

    console.log('URL: ', req.url);

    console.log('METHOD: ', req.method);

    res.end('OK');                              //finalizar
});

//porta 3000
server.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');           //quando subir
});