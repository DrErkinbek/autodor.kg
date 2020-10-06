import React, { useReducer, useContext } from 'react';
import PaginateContext from './PaginateContext';
import PaginateReducer from './PaginateReducer';
import { SET_PAGE } from '../types';
import AccessoryContext from '../accessory/AccessoryContext';

const PaginateState = (props) => {
    const initialState = {
        currentPage: 1,
        cardPerPage: 16,
    }
    const accessoryContext = useContext(AccessoryContext);
    const { accessories } = accessoryContext;

    const [state, dispatch] = useReducer(PaginateReducer, initialState);

    const indexOfLastCard = state.currentPage * state.cardPerPage;
    const indexOfFirstCard = indexOfLastCard - state.cardPerPage;
    const totalCards = accessories.length;
    const currentAccessories = accessories.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => {
        dispatch({
            type: SET_PAGE,
            payload: pageNumber
        })
    }

    return <PaginateContext.Provider value={{
        currentPage: state.currentPage,
        cardPerPage: state.cardPerPage,
        paginate,
        indexOfFirstCard,
        indexOfLastCard,
        totalCards,
        currentAccessories
    }}>{props.children}</PaginateContext.Provider>
}

export default PaginateState;