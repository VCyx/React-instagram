import { LOAD_USER_SUCCESS } from './type'
import userReducer from "./userReducer";

describe("Testing userReducer.js", () => {

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

  test("LOAD_USER_SUCCESS  is should be loading users", () => {
    const user = [{id:1, name:'joch'},{id:2, name: 'make'}];

    const action = {
      type: LOAD_USER_SUCCESS,
      payload: user
    };

    const newState = userReducer(initialState, action);
     expect(newState.users.data).toEqual(user)
  });
});