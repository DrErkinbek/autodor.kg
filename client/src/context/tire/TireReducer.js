import {
    GET_TIRES,
    GET_TIRESBYSEASON,
    GET_TIRE,
    SET_LOADING
} from '../types';

export default(state, action) => {
    switch(action.type){
        case GET_TIRES:
            return {
                ...state,
                tires: action.payload,
                loading: false
            }
        case GET_TIRESBYSEASON:
            return {
                ...state,
                tires: action.payload,
                loading: false
            }
        case GET_TIRE:
            return {
                ...state,
                tire: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}