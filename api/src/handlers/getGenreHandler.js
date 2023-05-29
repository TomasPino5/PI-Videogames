const axios = require('axios');
const { Genres } = require('../db');
require('dotenv').config();
const { GE_URL, API_KEY } = process.env;
  
const getGenreHandler = async () => {
  try {
    const response = await axios.get(`${GE_URL}?key=${API_KEY}`);
    const genres = response.data.results.map(genre => genre.name);
    for (const genre of genres) {
      await Genres.create({
        name: genre
      });
    }
    return 'Los géneros se han guardado correctamente en la base de datos.';
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getGenreHandler };