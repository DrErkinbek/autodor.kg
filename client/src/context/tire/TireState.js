import React, { useReducer } from 'react';
import TireContext from './TireContext';
import tireReducer from './TireReducer';

import {
    GET_TIRES,
    GET_TIRE,
    SET_LOADING
} from '../types';

const TireState = (props) => {
    const initialState = {
        tires: [],
        tire: {},
        loading: false
    }
    const [state, dispatch] = useReducer(tireReducer, initialState);

    //Set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // Get Tires
    const getTires = async () => {
        setLoading();

        const response = await fetch(`http://localhost:5000/api-v1/tires`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_TIRES,
            payload: json
        });
    }
    // get Tire by Product Code
    const getTire = async (productCode) => {
        setLoading();

        const response = await fetch(`http://localhost:5000/api-v1/tires/${productCode}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_TIRE,
            payload: json
        });
    }

    return <TireContext.Provider value={{
        tires: state.tires,
        tire: state.tire,
        loading: state.loading,
        getTires,
        getTire
    }}>{props.children}</TireContext.Provider>

}
export default TireState;