const { getGenreHandler } = require('../handlers/getGenreHandler')
const { Genres } = require('../db');

const getGenre = async (req, res) => {
    try {
        const count = await Genres.count();
        if (count === 0) {
            const genre = await getGenreHandler();
            res.status(200).json(genre)
        } else {
            res.status(400).json({ message: 'La tabla de géneros no está vacía. No se requiere obtener los géneros de la API.' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { getGenre };