import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  GET_USER,
  SET_USER_LOGIN,
  SET_SUBSCRIBED_USERS,
  SET_RANDOM_USERS,
} from "./type";

const initialState = {
  users: {
    data: [],
    isLoading: true,
    posts: [],
    isAuth: localStorage.getItem("token") || false,
  },
  user: {
    data: {},
    subscribed: [],
    randomUsers: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return { ...state, users: { ...state.users, isLoading: action.payload } };
    case LOAD_USER_SUCCESS:
      return { ...state, users: { ...state.users, data: action.payload } };
    case GET_USER:
      return { ...state, user: { ...state.user, data: action.payload } };
    case SET_USER_LOGIN: {
      return { ...state, users: { ...state.users, isAuth: action.payload } };
    }
    case SET_SUBSCRIBED_USERS:
      const newData = action.payload.map((user) => {
        return user.nickname;
      });
      return { ...state, user: { ...state.user, subscribed: newData } };
    case SET_RANDOM_USERS:
      const randomUsers = action.payload.filter((user) => {
        return !state.user.subscribed.some((sub) => {
          // todo and not my user id
          return sub.id === user.id;
        });
      });
      return { ...state, user: { ...state.user, randomUsers: randomUsers } };

    default:
      return state;
  }
};

export default userReducer;
