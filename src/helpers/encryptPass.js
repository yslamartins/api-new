const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

function encryptPassword(senha) {
    const key = process.env.SECRET_KEY;

    // Cria um hash a partir da chave secreta
    const hash = crypto
        .createHash('sha256')
        .update( key)
        .digest('base64')
        .substring(0, 32);

    // Gera um IV aleatório
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', hash, iv);

    // Criptografa a senha
    let encrypted = cipher.update(senha);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    // Concatena o IV e a senha criptografada em hexadecimal
    const pass = iv.toString('hex') + ':' + encrypted.toString('hex');
    return pass;
}

module.exports = encryptPassword;