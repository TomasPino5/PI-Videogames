import axios from "axios";
export const GET_VG = "GET_VG";
export const GET_ID_VG = "GET_ID_VG";

export const getVideogames = () => {
    return async function(dispatch) {
        const response = await axios.get('http://localhost:3001/videogames');
        const videogames = response.data;
        dispatch({ type: GET_VG, payload: videogames })
    }
};

export const getIdVideogame = (id) => {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames/${id}`);
        const videogame = response.data;
        dispatch({ type: GET_ID_VG, payload: videogame })
    }
};