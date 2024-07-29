const listaAnimes = require("../mocks/lista-animes");

function getAll(req, res) {
  res.send(listaAnimes);
}
function getAnimeById(req, res) {
  const { id } = req.params;
  const anime = listaAnimes.find((anime) => anime.id === Number(id));

  if (!anime) {
    return res.status(404).send("Anime não encontrado!");
  } //era pra ter uma pasta só para armazenar os middles. - middleware
  res.send(anime);
}
function insertAnime(req, res) {
  const { id, nome, ano, nota, genero, episodios, imagem, sinopse } = req.body;

  listaAnimes.push({ id, nome, ano, nota, genero, episodios, imagem, sinopse });

  res.status(201).send("Anime adcionado com sucesso.") //criado com sucesso
}
function deleteAnime(req, res) {
  const { id } = req.params;

  const index = listaAnimes.findIndex((anime) => anime.id === Number(id));

  if (index === -1) {
    return res.status(404).send({ message: "Produto não encontrado" });
  } //era pra ter uma pasta só para armazenar os middles. - middleware
  res.send(listaAnimes);
}
function attAnime(req, res) {
  const { id } = req.params;
  const { episodios } = req.body;

  const index = listaAnimes.findIndex((anime) => anime.id === Number(id));

  if (index === -1) {
    return res.status(404).send({ message: "Produto não encontrado" });
  } 
  listaAnimes[index].episodios = episodios;
  res.status(201).send("Anime atualizado com sucesso.")
}
module.exports = {
  getAll,
  getAnimeById,
  insertAnime,
  deleteAnime,
  attAnime,
};
