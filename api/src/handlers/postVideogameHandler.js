const { Videogames } = require('../db')

const postVideogameHandler = async ({ name, description, platforms, image, released, rating }) => {
    try {
        
        const videogame = await Videogames.create({
            name: name,
            description: description,
            platforms: platforms,
            image: image,
            released: released,
            rating: rating
        });
        return videogame;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { postVideogameHandler };