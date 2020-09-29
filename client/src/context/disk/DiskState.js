import React, { useReducer } from 'react';
import DiskContext from './DiskContext';
import diskReducer from './DiskReducer';

import {
    GET_DISKS,
    GET_DISK,
    SET_LOADING
} from '../types';

const DiskState = (props) => {
    const initialState = {
        disks: [],
        disk: {},
        loading: false
    }
    const [state, dispatch] = useReducer(diskReducer, initialState);

    const setLoading = () => dispatch({ type: SET_LOADING });

    const getDisks = async () => {
        setLoading();

        const response = await fetch(`http://autodor.com.kg/api-v1/disks`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_DISKS,
            payload: json
        });
    }

    const getDisk = async (productCode) => {
        setLoading();

        const response = await fetch(`http://autodor.com.kg/api-v1/disks/disk/${productCode}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_DISK,
            payload: json
        });
    }

    return <DiskContext.Provider value={{
        disks: state.disks,
        disk: state.disk,
        loading: state.loading,
        getDisks,
        getDisk
    }}>{props.children}</DiskContext.Provider>

}

export default DiskState;