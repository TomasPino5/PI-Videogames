const axios = require('axios');
require('dotenv').config();
const { VG_URL, API_KEY } = process.env;

const getNameVideogameHandler = async (name) => {
    try {
        const url = `${VG_URL}?search=${name}&key=${API_KEY}`;
        const response = await axios.get(url);
        const resultados = response.data;
        return resultados.slice(0, 15); // Retorno los primeros 15 resultados
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { getNameVideogameHandler };