import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  GET_USER,
  SET_USER_LOGIN,
  SET_SUBSCRIBED_USERS,
} from "./type";

const initialState = {
  users: {
    data: [],
    isLoading: true,
    posts: [],
    isAuth: localStorage.getItem("token") || false,
    user: {},
  },
  user: {
    data: {},
    subscribed: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return { ...state, users: { ...state.users, isLoading: action.payload } };
    case LOAD_USER_SUCCESS:
      return { ...state, users: { ...state.users, data: action.payload } };
    case GET_USER:
      return { ...state, user: { data: action.payload } };
    case SET_USER_LOGIN: {
      return { ...state, users: { ...state.users, isAuth: action.payload } };
    }
    case SET_SUBSCRIBED_USERS:
      return { ...state, user: { ...state.user, subscribed: action.payload } };

    default:
      return state;
  }
};

export default userReducer;
