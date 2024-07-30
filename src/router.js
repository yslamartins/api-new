const express = require("express");
const router = express.Router(); // sempre que quiser acessar a função de rotas, estão nessa constante chamada router.
const animeController = require("./controllers/anime-controller");
const middlewareAnimes = require("./middlewares/anime-middleware");

router.get("/animes", animeController.getAll);
router.get(
  "/animes/:id",
  middlewareAnimes.middlewareGetAnimeById,
  animeController.getAnimeById
);
router.post(
  "/animes",
  middlewareAnimes.middlewareInsertAnime,
  animeController.insertAnime
);
router.delete(
  "/animes/:id",
  middlewareAnimes.middlewareDeleteAnime,
  animeController.deleteAnime
);
router.put(
  "/animes/:id",
  middlewareAnimes.middlewareUpdateAnime,
  animeController.attAnime
);

module.exports = router;
