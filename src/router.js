const express = require('express');
const router = express.Router(); // sempre que quiser acessar a função de rotas, estão nessa constante chamada router.
const animeController = require('./controllers/anime-controller');

router.get('/animes', animeController.getAll);