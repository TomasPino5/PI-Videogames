const axios = require('axios');
require('dotenv').config();
const { VG_URL, API_KEY } = process.env;

const getPlatformsHandler = async () => {
    try {
        const response = await axios.get(`${VG_URL}?key=${API_KEY}`);
        const platforms = response.data.results[0].platforms.map(platform => platform.platform.name);
        return platforms;
      } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { getPlatformsHandler };