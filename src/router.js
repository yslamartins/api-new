const express = require('express');
const router = express.Router(); // sempre que quiser acessar a função de rotas, estão nessa constante chamada router.
const animeController = require('./controllers/anime-controller');

router.get('/animes', animeController.getAll);
router.get('/animes/:id', animeController.getAnimeById);
router.post('/animes', animeController.insertAnime);
router.delete('/animes/:id', animeController.deleteAnime);
router.put('/animes/:id', animeController.attAnime);

module.exports = router;
