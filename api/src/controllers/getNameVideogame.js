const { getNameVideogameHandler } = require('../handlers/getNameVideogameHandler');

const getNameVideogame = async (req, res) => {
    try {
        const { name } = req.params; // Tomo el name de la ruta /videogames/name?=:name
        const videogames = await getNameVideogameHandler(name);
        res.status(200).json(videogames)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { getNameVideogame };