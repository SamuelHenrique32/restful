let NeDB = require('nedb');
let db = new NeDB({             //nome, se nao existir cria

    filename:'users.db',
    autoload:true
});

module.exports = app => {

    //rota padrao
    let route = app.route('/users');

    route.get((req, res) => {

        //nao busca ninguem especifico, tras todos
        //ordena por nome ascendente, decrescente e -1
        db.find({}).sort({name:1}).exec((err, users)=>{

            if(err){
                //send e modulo
                app.utils.error.send(err, req, res);
            } else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({                                          //express permite tirar stringfy
                    users                                           //seria users:users mas e permitido deixar assim
                });
            }
        });

    });


    route.post((req, res) => {

        if(!app.utils.validator.user(app, req, res)) return false;

        //salva no banco
        //recebe objeto json e funcao com erro e registro salvo
        db.insert(req.body, (err, user)=>{

            if(err){
                app.utils.error.send(err, req, res);
            } else{
                res.status(200).json(user);
            }
        });
    });

    let routeId = app.route('/users/:id');

    //retorna usuario que possui id informado
    routeId.get((req, res) => {
        //.id e o nome que e passado por parametro pela url
        db.findOne({_id:req.params.id}).exec((err, user)=>{

            if(err){
                app.utils.error.send(err, req, res);
            } else{
                res.status(200).json(user);
            }
        });
    });

    //update
    routeId.put((req, res) => {

        if(!app.utils.validator.user(app, req, res)) return false;

        //.id e o nome que e passado por parametro pela url
        //req.body guarda dados a alterar
        //mais um parametro de erro, funcao de callback
        db.update({_id: req.params.id }, req.body, err => {

            if(err){
                app.utils.error.send(err, req, res);
            } else{
                //juntar pois senao id nao aparece
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });
    });

    routeId.delete((req, res) => {

        //registro a ser excluido e opcoes (exclusao multipla)
        db.remove({ _id: req.params.id }, {}, err => {

            if(err){
                app.utils.error.send(err, req, res);
            } else{
                //mostra id excluido
                res.status(200).json(req.params);
            }
        });
    });
};