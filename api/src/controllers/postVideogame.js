const { postVideogameHandler } = require('../handlers/postVideogameHandler');

const postVideogame = async (req, res) => {
    try {
        const videogameEnviado = req.body;
        const videogameCreado = await postVideogameHandler(videogameEnviado);
        res.status(200).json(videogameCreado)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = { postVideogame };