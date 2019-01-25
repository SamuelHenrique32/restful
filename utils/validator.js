module.exports = {

    user:(app, req, res)=>{

        //verificar campos antes de inserir no banco
        req.assert('name', 'O nome é obrigatório.').notEmpty();
        req.assert('email', 'O e-mail está inválido.').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors){
            app.utils.error.send(errors, req, res);
            //nao realizar insert
            return false;
        } else{
            
            return true;
        }
    }
};