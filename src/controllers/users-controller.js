const userModel = require('../models/usersModel')

async function createUser(req, res){
    const {nome, email, senha} = req.body;

    await userModel.insertUserModel(nome, email, senha)

    return res.status(201).send("Usuário inserido com sucesso")
}


module.exports ={
    createUser
}