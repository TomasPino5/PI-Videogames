const { Router } = require('express');
const { getVideogame } = require('../controllers/getVideogame');
const { getIdVideogame } = require('../controllers/getIdVideogame');
const { getNameVideogame } = require('../controllers/getNameVideogame');
const { postVideogame } = require('../controllers/postVideogame');
const { getGenre } = require('../controllers/getGenre');
const router = Router();

router.get('/videogames', getVideogame)
router.get('/videogames/:idVideogame', getIdVideogame)
router.get('/videogames/:name', getNameVideogame)
router.post('/videogames', postVideogame)
router.get('/genres', getGenre)

module.exports = router;
