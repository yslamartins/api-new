const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

function decryptPassword(senha){
    const key = process.env.SECRET_KEY;

    const hash = crypto
        .createHash('sha256')
        .update(key)
        .digest('base64')
        .substring(0, 32);

    const [ivHex, encryptedHex] = senha.split(':'); // a separação a partir dos :
    
    const iv = Buffer.from(ivHex, 'hex');
    const encrypted = Buffer.from(encryptedHex, 'hex');

    const decipher = crypto.createDecipheriv('aes-256-cbc', hash, iv);
    
    let decrypted = decipher.update(encrypted);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}
module.exports = decryptPassword;