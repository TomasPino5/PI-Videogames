import { GET_VG, GET_NAME_VG, GET_G, GET_P, ADD_VG } from './actions';

export const initialState = {
    videogames: [],
    nameVideogames: [],
    genres: [],
    platforms: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VG:
            return { ...state, videogames: action.payload }
        case GET_NAME_VG:
            return { ...state, nameVideogames: action.payload }
        case GET_G:
            return { ...state, genres: action.payload }
        case GET_P:
            return { ...state, platforms: action.payload }
        case ADD_VG:
            return { ...state, videogames: [...state.videogames, action.payload] };
        default:
            return {...state}
    }
}

export default rootReducer;