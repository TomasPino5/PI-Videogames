const { getIdVideogameHandler } = require('../handlers/getIdVideogameHandler');

const getIdVideogame = async (req, res) => {
    try {
        const { idVideogame } = req.params; // Tomo el id de la ruta /videogames/:idVideogame
        const videogame = await getIdVideogameHandler(idVideogame);
        res.status(200).json(videogame)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { getIdVideogame };