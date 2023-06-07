const { Videogames, Genres } = require("../db");
const axios = require("axios")
require('dotenv').config();
const { VG_URL, API_KEY } = process.env;


const getVideogameHandler = async () => {
  const pages = [1, 2, 3, 4, 5];
  const links = pages.map((page) => {
    return `${VG_URL}?key=${API_KEY}&page=${page}`;
  });
  const apiVideogames = await Promise.all(
    links.map(async (link) => {
      const response = await axios.get(link);
      const videogames = response.data.results;
      // traigo los datos que necesito de videogames y los guardo en formatVideogames
      const formatVideogames = videogames.map((game) => {
        return {
          id: game.id,
          name: game.name,
          background_image: game.background_image,
          genres: game.genres.map((genre) => genre.name),
          platforms: game.platforms.map((element) => element.platform.name),
          rating: game.rating,
        };
      });
      return formatVideogames;
    })
  );
  // Utilizo reduce en el array apiVideogames para combinar los arrays de juegos en un solo array llamado clearListVideogamesApi.
  const clearVideogamesApi = apiVideogames.reduce((a, b) => {
    return a.concat(b);
  });
  // Realizo una consulta a la base de datos para obtener los videojuegos almacenados, asi incluyo el nombre del género de cada videojuego en los resultados de la consulta.
  const dbVideogames = await Videogames.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
    },
  });
  const clearVideogamesDB = dbVideogames.map((dbVideogame) => {
    const dbGame = {
      id: dbVideogame.dataValues.id,
      name: dbVideogame.dataValues.name,
      background_image: dbVideogame.dataValues.background_image,
      genres: dbVideogame.dataValues.Genres.map((genre) => genre.dataValues.name),
      platforms: dbVideogame.dataValues.platforms,
      rating: dbVideogame.dataValues.rating,
    };
    return dbGame;
  });
  return clearVideogamesApi.concat(clearVideogamesDB);
};
  
module.exports = { getVideogameHandler };