import {LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_POST_USER_SUCCESS} from './type'

const initialState ={
    users:{
        data: [],
        isLoading: true,
        posts: [],
    },
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_USER_REQUEST:
            return {...state, users: {...state.users, isLoading: action.payload}}
         case LOAD_USER_SUCCESS:
            return {...state, users: {...state.users, data: action.payload}};
         case LOAD_POST_USER_SUCCESS:
             return {...state, users: {...state.users, posts: action.payload}};
        default:
        return state
    }

}

export default userReducer;