const axios = require('axios');
require('dotenv').config();
const { GE_URL, API_KEY } = process.env;

const getAllGenresHandler = async () => {
    try {
        const response = await axios.get(`${GE_URL}?key=${API_KEY}`);
        const genres = response.data.results.map(genre => genre.name);
        return genres;
      } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { getAllGenresHandler };