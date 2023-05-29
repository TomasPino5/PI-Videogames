const { getVideogameHandler } = require('../handlers/getVideogameHandler')

const getVideogame = async (req, res) => {
  try {
    const videogame = await getVideogameHandler();
    return res.json(videogame);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getVideogame };