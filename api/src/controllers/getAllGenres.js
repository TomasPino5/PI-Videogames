const { getAllGenresHandler } = require('../handlers/getAllGenresHandler')

const getAllGenres = async (req, res) => {
    try {
      const genres = await getAllGenresHandler();
      return res.json(genres);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = { getAllGenres };