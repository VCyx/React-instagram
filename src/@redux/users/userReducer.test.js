import { LOAD_USER_SUCCESS,GET_USER,SET_USER_LOGIN,SET_USER_DATA,SAVE_COMMENT, SET_SUBSCRIBED_USERS, SET_RANDOM_USERS } from './type'
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
      subscribed: [{id:1}],
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

  test("GET_USER it should be load one user, when user want to click", () => {
    const user = {id:1, name:'joch'};
    const action = {
      type: GET_USER,
      payload: user
    };

    const newState = userReducer(initialState, action);
    expect(newState.user.data).toEqual(user)
   expect(newState.user.data.id).toBe(1)
  });

  test("SET_USER_LOGIN should get a token to log in on page", () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoiZGRAZ21haWwucnUiLCJyb2xlIjoiU1VQRVJVU0VSIiwiaWF0IjoxNjIxNTMxMTQ0fQ._-Lv2ObcB1s0DdpCaliu9WC-GjM-rluyOPBDeqh0QIk';
    const action = {
      type: SET_USER_LOGIN,
      payload: token
    };

    const newState = userReducer(initialState, action);
    expect(newState.users.isAuth).toBe(token)
  });

  test("SET_USER_DATA get a data about user, nick and avatar, who loggin for page", () => {
    const userData = {
      avatar: "NoAvatar.png",
      nick: "Od1Seu",
      userId: 6
    };

    const action = {
      type: SET_USER_DATA,
      payload: userData
    };

    const newState = userReducer(initialState, action);
    expect(newState.user.mainUser).toEqual(userData);
    expect(newState.user.mainUser.nick).toBe('Od1Seu');
  });

  test("SAVE_COMMENT add comment from person to post", () => {
    const comment = 'add first comment';

    const action = {
      type: SAVE_COMMENT,
      payload: comment
    };

    const newState = userReducer(initialState, action);
    expect(newState.user.comments).toBe(comment);
    expect(newState.user.comments).toMatch('add first comment');
  });

  test("SET_SUBSCRIBED_USERS should describe users", () => {
    const userSubscribe = [
      {
        createdAt: "2021-05-20T17:18:20.394Z",
        id: 69,
        nickname: {id: 10, nick: "testJest", avatar: "NoAvatar.png", createdAt: "2021-05-20T16:44:51.970Z"},
        nicknameId: 10,
        updatedAt: "2021-05-20T17:18:20.394Z",
        userId: 6,
      }
    ];
    const newT = userSubscribe.map((user) => {
      return user.nickname;
    });

    const action = {
      type: SET_SUBSCRIBED_USERS,
      payload: newT
    };
    const newState = userReducer(initialState, action);
   expect(newState.user.subscribed.id).toBe(newT.id);
  });

  test("SET_RANDOM_USERS  should describe random users", () => {
    const randUser = [{
      id:1
    },
      {
        id:2
      }
    ];
    const action = {
      type: SET_RANDOM_USERS,
      payload: randUser
    };
    const newState = userReducer(initialState, action);
    expect(newState.user.subscribed.length).toBe(1);
  });
});