module.exports = {
    //por padrao sera erro 400
    send: (err, req, res, code = 400) => {

        //template string
        console.log('error: ${err}');
        //resposta para servidor
        res.status(code).json({
            error: err
        });
    }
};