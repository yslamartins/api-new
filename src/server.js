// Ficará responsável por criar o servidor

const app = require('./app')
const dotenv = require('dotenv');
dotenv.config();

const port = 4666;

app.listen(port, () =>{
    console.log(`O servidor está rodando na porta http://localhost:${port}`);
})