const { Router } = require('express');
const { getVideogame } = require('../controllers/getVideogame');
const { getIdVideogame } = require('../controllers/getIdVideogame');
const { getNameVideogame } = require('../controllers/getNameVideogame');
const { postVideogame } = require('../controllers/postVideogame');
const { getGenre } = require('../controllers/getGenre');
const { getAllGenres } = require('../controllers/getAllGenres');
const { getPlatforms } = require('../controllers/getPlatforms');
const router = Router();

router.get('/videogames', getVideogame)
router.get('/videogames/:idVideogame', getIdVideogame)
router.get('/videogames/:name', getNameVideogame)
router.post('/videogames/post', postVideogame)
router.get('/genres', getGenre)
router.get('/genres/all', getAllGenres)
router.get('/platforms', getPlatforms)

module.exports = router;
