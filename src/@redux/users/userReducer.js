import {
  LOAD_USER_SUCCESS,
  GET_USER,
  SET_USER_LOGIN,
  SET_SUBSCRIBED_USERS,
  SET_RANDOM_USERS,
  SET_USER_DATA,
  SAVE_COMMENT,
} from "./type";

const initialState = {
  users: {
    data: [],
    isLoading: false,
    posts: [],
    isAuth: localStorage.getItem("token") || false,
  },
  user: {
    data: {},
    сomments: [],
    subscribed: [],
    randomUsers: [],
    mainUser: {},
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
          return sub.id === user.id || state.user.mainUser.userId === user.id;
        });
      });
      return { ...state, user: { ...state.user, randomUsers: randomUsers } };
    case SET_USER_DATA:
      return { ...state, user: { ...state.user, mainUser: action.payload } };
    case SAVE_COMMENT:
      return { ...state, user: { ...state.user, comments: action.payload } };

    default:
      return state;
  }
};

export default userReducer;
