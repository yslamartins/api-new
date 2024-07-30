const listaAnimes = require("../mocks/lista-animes")

function middlewareGetAnimeById(req, res, next){
    const { id } = req.params;
    const anime = listaAnimes.find((anime) => anime.id === Number(id));

  if (!anime) {
    return res.status(404).send("Anime não encontrado!");
  } 
  next(); // continua cara
}
function middlewareInsertAnime(req, res, next){
    const{
        nome,
        ano, 
        genero, 
        imagem, 
        sinopse
    } = req.body
    
    if(
        !nome || !ano || !genero || !imagem || !sinopse
    ){  
        return res.status(400).send("Dados incompletos.");
        
    }
    const anime = listaAnimes.find(anime => anime.nome === nome);
    if(anime){
        return res.status(400).send("Anime já cadastrado.")
    }
    next()
}
function middlewareDeleteAnime(req, res, next){
    const { id } = req.params;
    const anime = listaAnimes.find((anime) => anime.id === Number(id));
    
    if(!anime) {
        return res.status(404).send("Anime não encontrado!");
    } 
    if(!id){
        return res.status(404).send("Insira um id existente")
    }
    next();
}
function middlewareUpdateAnime(req, res, next){
  const { id } = req.params;
  const { episodios } = req.body;

  if(!id || episodios){
    return res.status(400).send("Dados Incompletos")
  }

  const anime = listaAnimes.find((anime) => anime.id === Number(id));
  if(!anime){
    return res.status(400).send("Anime não encontrado")
  }
  next()
}



module.exports = {
    middlewareGetAnimeById,
    middlewareInsertAnime,
    middlewareDeleteAnime,
    middlewareUpdateAnime
}