const { getPlatformsHandler } = require('../handlers/getPlatformsHandler')

const getPlatforms = async (req, res) => {
    try {
      const platforms = await getPlatformsHandler();
      return res.json(platforms);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = { getPlatforms };