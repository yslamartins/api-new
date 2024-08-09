const authModel = require('../models/authModel')
const decryptPass = require('../helpers/decryptPass')

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

async function loginMiddleware(req, res, next) {
    const {email, senha} = req.body

    if(!email || !senha){
        return res.status(400).send("Dados inválidos");
    }
    const user = await authModel.getUserByEmail(email);

    if (!user){
        return res.status(404).send("Usuário não encontrado");
    }

    const decrypted = await decryptPass(user.senha);

    if (senha !== decrypted){
        return res.status(400).senha("Senha inválida");
    }

    const data = {
        id: user.id,
        email: user.email
     }
    req.user = data;

    next();
}

module.exports = {
    loginMiddleware
}