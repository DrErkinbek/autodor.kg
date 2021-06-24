import React, { useReducer } from 'react';
import AccessoryContext from './AccessoryContext';
import accessoryReducer from './AccessoryReducer';
import {
    GET_ACCESSORIES,
    GET_ACCESSORY,
    SET_LOADING
} from '../types';

const AccessoryState = (props) => {
    const initialState = {
        accessories: [],
        accessory: {},
        loading: false
    }
    const [state, dispatch] = useReducer(accessoryReducer, initialState);

    const setLoading = () => dispatch({ type: SET_LOADING });

    const getAccessories = async () => {
        setLoading();

        const response = await fetch(`http://localhost:5000/api-v1/accessories`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_ACCESSORIES,
            payload: json
        })
    }
    
    const getAccessory = async (productCode) => {
        setLoading();

        const response = await fetch(`http://localhost:5000/api-v1/accessories/${productCode}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_ACCESSORY,
            payload: json
        })
    }
    return <AccessoryContext.Provider value={{
            accessories: state.accessories,
            accessory: state.accessory,
            loading: state.loading,
            getAccessories,
            getAccessory
        }}>{props.children}</AccessoryContext.Provider>
}

export default AccessoryState;