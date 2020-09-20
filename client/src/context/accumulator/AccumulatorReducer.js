import {
    GET_ACCUMULATORS,
    GET_ACCUMULATOR,
    GET_ACCUMULATORSBYBRAND,
    SET_LOADING
} from '../types';

export default(state, action) => {
    switch(action.type){
        case GET_ACCUMULATORS:
            return {
                ...state,
                accumulators: action.payload,
                loading: false
            }
        case GET_ACCUMULATORSBYBRAND:
            return {
                ...state,
                accumulators: action.payload,
                loading: false
            }
        case GET_ACCUMULATOR:
            return {
                ...state,
                accumulator: action.payload,
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