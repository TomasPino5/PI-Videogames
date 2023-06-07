const { Videogames } = require('../db')

const postVideogameHandler = async ({ name, image, description, genres, rating, platforms, released }) => {
    try {
        
        const videogame = await Videogames.create({
            name: name,
            image: image,
            description: description,
            genres: genres,
            rating: rating,
            platforms: platforms,
            released: released,
        });
        return videogame;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { postVideogameHandler };