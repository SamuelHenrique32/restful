module.exports = app => {

    app.get('/users', (req, res) => {

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

    //  /users/admin
    app.post('/users', (req, res) => {

        //exibir campos
        res.json(req.body);
    });
};