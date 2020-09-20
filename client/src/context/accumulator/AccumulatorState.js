import React, { useReducer } from 'react';
import AccumulatorContext from './AccumulatorContext';
import accumulatorReducer from './AccumulatorReducer';
import {
    GET_ACCUMULATORS,
    GET_ACCUMULATORSBYBRAND,
    GET_ACCUMULATOR,
    SET_LOADING
} from '../types';

const AccumulatorState = (props) => {
    const initialState = {
        accumulators: [],
        accumulator: {},
        loading: false
    }
    const [state, dispatch] = useReducer(accumulatorReducer, initialState);

    //Set loading
    const setLoading = () => dispatch({ type: SET_LOADING });
    // Get Accumulators
    const getAccumulators = async () => {
        setLoading();

        const response = await fetch(`http://localhost:5000/api-v1/accumulators`);
        const json = await response.json();
        dispatch({
            type: GET_ACCUMULATORS,
            payload: json
        });
    }
    // get Accumulator
    const getAccumulatorByBrand = async (brand) => {
        setLoading();

        const response = await fetch(`http://localhost:5000/api-v1/accumulators/${brand}`);
        const json = await response.json();
        dispatch({
            type: GET_ACCUMULATORSBYBRAND,
            payload: json
        });
    }
    // get Accumulator
    const getAccumulator = async (productCode) => {
        setLoading();

        const response = await fetch(`http://localhost:5000/api-v1/accumulators/accumulator/${productCode}`);
        const json = await response.json();
        dispatch({
            type: GET_ACCUMULATOR,
            payload: json
        })
    }

    return <AccumulatorContext.Provider value={{
            accumulators: state.accumulators,
            accumulator: state.accumulator,
            loading: state.loading,
            getAccumulators,
            getAccumulatorByBrand,
            getAccumulator
        }}>{props.children}</AccumulatorContext.Provider>
}

export default AccumulatorState;