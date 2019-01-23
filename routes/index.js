//exportar modulo para ficar presente no index inicial
module.exports = app => {

    app.get('/', (req, res)=> {                             //servidor criado, require e response

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Olá</h1>');
    });
};