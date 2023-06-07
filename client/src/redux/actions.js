import axios from "axios";
export const GET_VG = "GET_VG";
export const GET_NAME_VG = "GET_NAME_VG";
export const GET_G = "GET_G";
export const GET_P = "GET_P";
export const ADD_VG = "ADD_VG";

export const getVideogames = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/videogames');
            const videogames = response.data;
            dispatch({ type: GET_VG, payload: videogames })
        } catch (error) {
            console.error(error);
        }
    }
};

export const getVideogamesByName = (name) => {
    return async function (dispatch) {
        try {
          const response = await axios.get(`http://localhost:3001/videogames/${name}`);
          const nameVideogames = response.data;
          dispatch({ type: GET_NAME_VG, payload: nameVideogames });
        } catch (error) {
          console.error(error);
        }
      };
};

export const getGenres = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/genres/all`);
            const genres = response.data;
            dispatch({ type: GET_G, payload: genres })
        } catch (error) {
            console.error(error);
        }
    }
};

export const getPlatforms = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/platforms`);
            const platforms = response.data;
            dispatch({ type: GET_P, payload: platforms })
        } catch (error) {
            console.error(error);
        }
    }
};

export const postVideogame = (videogame) => {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/videogames/post", videogame);
        console.log('Videogame to be sent:', response.data);
            const createdVideogame = response.data;
            dispatch({ type: ADD_VG, payload: createdVideogame });
    };
};