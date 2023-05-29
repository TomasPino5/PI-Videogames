const axios = require('axios');
require('dotenv').config();
const { VG_URL, API_KEY } = process.env;

const getVideogameHandler = async () => {
  let results = [];
  try {
    // La api te trae 20 juegos por solicitud entonces realizo 5 solicitudes para obtener un total de 100 videojuegos (20 en cada solicitud)
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(`${VG_URL}?key=${API_KEY}`);
      results = results.concat(response.data); // Es para acumular los resultados de varias solicitudes en un solo arreglo, cada vez que se obtiene una respuesta con nuevos videojuegos, esos videojuegos se agregan al arreglo results utilizando concat().
    }
    return results.slice(0, 100); // Esto es para asegurarme de devolver solo los primeros 100 videojuegos del arreglo "results"
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getVideogameHandler };