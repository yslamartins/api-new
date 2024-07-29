const listaAnimes = require("../mocks/lista-animes")

function getAll(req, res){
    res.send(listaAnimes);
}
module.exports={
    getAll,
}