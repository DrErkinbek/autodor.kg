import {
    GET_ACCESSORIES,
    GET_ACCESSORY,
    SET_LOADING
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_ACCESSORIES:
            return {
                ...state,
                accessories: action.payload,
                loading: false
            }
        case GET_ACCESSORY: 
            return {
                ...state,
                accessory: action.payload,
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