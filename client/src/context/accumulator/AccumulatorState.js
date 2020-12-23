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

    const setLoading = () => dispatch({ type: SET_LOADING });
    
    const getAccumulators = async () => {
        setLoading();

        const response = await fetch(`http://autodor.com.kg/api-v1/accumulators`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_ACCUMULATORS,
            payload: json
        });
    }
    
    const getAccumulatorByBrand = async (brand) => {
        setLoading();

        const response = await fetch(`http://autodor.com.kg/api-v1/accumulators/${brand}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_ACCUMULATORSBYBRAND,
            payload: json
        });
    }
    
    const getAccumulator = async (productCode) => {
        setLoading();

        const response = await fetch(`http://autodor.com.kg/api-v1/accumulators/accumulator/${productCode}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
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