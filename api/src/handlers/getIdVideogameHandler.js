const axios = require("axios");
require('dotenv').config();
const { VG_URL, API_KEY } = process.env;

const getIdVideogameHandler = async (idVideogame) => {
  try {
    const response = await axios.get(`${VG_URL}/${idVideogame}?key=${API_KEY}`);
    const { id, name, description, platforms, released, background_image, rating, genres } = response.data;
    
    const plataformas = platforms.map(platforms => platforms.platform.name);
    const generos = genres.map(genero => genero.name);

    const videogameSolicitado = {
      id,
      name,
      description,
      platforms: plataformas,
      image: background_image,
      released,
      rating: rating,
      genres: generos
    }

    return videogameSolicitado;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getIdVideogameHandler };