let NeDB = require('nedb');
let db = new NeDB({             //nome, se nao existir cria

    filename:'users.db',
    autoload:true
});

module.exports = app => {

    app.get('/users', (req, res) => {

        //nao busca ninguem especifico, tras todos
        //ordena por nome ascendente, decrescente e -1
        db.find({}).sort({name:1}).exec((err, users)=>{

            if(err){
                //template string
                console.log('error: ${err}');
                //resposta para servidor
                res.status(400).json({
                    error: err
                });
            } else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({                                          //express permite tirar stringfy
                    users                                           //seria users:users mas e permitido deixar assim
                });
            }
        });

    });


    app.post('/users', (req, res) => {

        //salva no banco
        //recebe objeto json e funcao com erro e registro salvo
        db.insert(req.body, (err, user)=>{

            if(err){
                //template string
                console.log('error: ${err}');
                //resposta para servidor
                res.status(400).json({
                    error: err
                });
            } else{
                res.status(200).json(user);
            }
        });
    });
};