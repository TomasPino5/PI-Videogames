import { GET_VG } from './actions';

export const initialState = {
    videogames: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VG:
            return { ...state, videogames: action.payload }
        default:
            return {...state}
    }
}

export default rootReducer;