// Ficará responsável por criar o servidor

const app = require('./app')
const port = 4666;

app.listen(port, () =>{
    console.log(`O servidor está rodando na porta http://localhost:${port}`);
})