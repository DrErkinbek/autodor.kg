import {
    GET_DISKS,
    GET_DISK,
    SET_LOADING
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_DISKS:
            return {
                ...state,
                disks: action.payload,
                loading: false
            }
        case GET_DISK:
            return {
                ...state,
                disk: action.payload,
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