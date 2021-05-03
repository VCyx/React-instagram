import React from 'react';
import {LOAD_CARD_REQUEST,LOAD_CARD_SUCCESS} from './type'

const initialState ={
    users:{
        data: [],
        isLoading: true
    }
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_CARD_REQUEST:
            return {...state, users: {...state.users, isLoading: action.payload}}
         case LOAD_CARD_SUCCESS:
            return {...state, users: {...state.users, data: action.payload}};
        default:
        return state
    }

}

export default userReducer;