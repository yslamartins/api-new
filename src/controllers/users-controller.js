const userModel = require('../models/usersModel')

async function createUser(req, res){
    const {nome, email, senha} = req.body;

    try{
        await userModel.insertUserModel(nome, email, senha)
    } catch(error){
        return res.status(400).send("Esse usuário já está cadastrado");
    }

    return res.status(201).send("Usuário inserido com sucesso")
}


module.exports ={
    createUser
}