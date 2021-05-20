import {
  ADD_POST_COMMENT,
  CLEAR_POSTS,
  LOAD_MAIN_POSTS,
  UPDATE_POST_LIKES,
} from "./types";
import postsReducer from "./postsReducer";

describe("Testing postReducer.js", () => {
  test("LOAD_MAIN_POSTS is adding posts to state and setting isLoading to false", () => {
    const initialState = {
      posts: [],
      isLoading: true,
    };
    const action = {
      type: LOAD_MAIN_POSTS,
      payload: [
        {
          commentaries: [],
          createdAt: "2021-05-19T12:03:48.729Z",
          id: 9,
          idUser: 5,
          img: "154e5bc5-69ba-4fdd-9669-7224596a8ff3.jpg",
          like: 0,
          likes: [],
          name: "Зима на берегу",
          nickname: {
            id: 5,
            nick: "MasterJs",
            avatar: "NoAvatar.png",
            createdAt: "2021-05-19T12:03:16.135Z",
            updatedAt: "2021-05-19T12:03:16.135Z",
          },
          nicknameId: 5,
          updatedAt: "2021-05-20T13:36:45.131Z",
        },
      ],
    };

    const newState = postsReducer(initialState, action);

    expect(newState.isLoading).toBeFalsy();
    expect(newState.posts.length).toBe(1);
    expect(newState.posts[0].id).toBe(9);
  });

  test("ADD_POST_COMMENT adding comment to the post", () => {
    const initialState = {
      posts: [
        {
          commentaries: [],
          createdAt: "2021-05-19T12:03:48.729Z",
          id: 9,
          idUser: 5,
          img: "154e5bc5-69ba-4fdd-9669-7224596a8ff3.jpg",
          like: 0,
          likes: [],
          name: "Зима на берегу",
          nickname: {
            id: 5,
            nick: "MasterJs",
            avatar: "NoAvatar.png",
            createdAt: "2021-05-19T12:03:16.135Z",
            updatedAt: "2021-05-19T12:03:16.135Z",
          },
          nicknameId: 5,
          updatedAt: "2021-05-20T13:36:45.131Z",
        },
      ],
      isLoading: false,
    };

    const action = {
      type: ADD_POST_COMMENT,
      payload: {
        postID: 9,
        comment: [
          {
            comment: "hello world!",
            createdAt: "2021-05-19T12:15:04.569Z",
            id: 1,
            nickname: {
              avatar: "NoAvatar.png",
              createdAt: "2021-05-19T11:53:14.408Z",
              id: 1,
              nick: "Cyx",
              updatedAt: "2021-05-19T11:53:14.408Z",
              userId: 1,
            },
            nicknameId: 1,
            postId: 9,
            updatedAt: "2021-05-19T12:15:04.569Z",
            userId: 1,
          },
        ],
      },
    };

    const newState = postsReducer(initialState, action);

    expect(newState.isLoading).toBe(initialState.isLoading);
    expect(newState.posts[0].commentaries.length).toBe(1);
    expect(newState.posts[0].commentaries[0].comment).toBe("hello world!");
    expect(newState.posts[0].commentaries[0].nickname.nick).toBe("Cyx");
  });

  test("UPDATE_POST_LIKES updates post likes", () => {
    const initialState = {
      posts: [
        {
          commentaries: [],
          createdAt: "2021-05-19T12:03:48.729Z",
          id: 9,
          idUser: 5,
          img: "154e5bc5-69ba-4fdd-9669-7224596a8ff3.jpg",
          like: 0,
          likes: [],
          name: "Зима на берегу",
          nickname: {
            id: 5,
            nick: "MasterJs",
            avatar: "NoAvatar.png",
            createdAt: "2021-05-19T12:03:16.135Z",
            updatedAt: "2021-05-19T12:03:16.135Z",
          },
          nicknameId: 5,
          updatedAt: "2021-05-20T13:36:45.131Z",
        },
      ],
      isLoading: false,
    };

    const action = {
      type: UPDATE_POST_LIKES,
      payload: {
        postID: 9,
        data: [{ like: 2 }, { like: 9 }],
      },
    };

    const newState = postsReducer(initialState, action);

    expect(newState.posts[0].likes.length).toBe(2);
    expect(newState.posts[0].likes[0].like).toBe(2);
  });

  test("CLEAR_POSTS to clear all the posts is state", () => {
    const initialState = {
      posts: [
        {
          commentaries: [],
          createdAt: "2021-05-19T12:03:48.729Z",
          id: 9,
          idUser: 5,
          img: "154e5bc5-69ba-4fdd-9669-7224596a8ff3.jpg",
          like: 0,
          likes: [],
          name: "Зима на берегу",
          nickname: {
            id: 5,
            nick: "MasterJs",
            avatar: "NoAvatar.png",
            createdAt: "2021-05-19T12:03:16.135Z",
            updatedAt: "2021-05-19T12:03:16.135Z",
          },
          nicknameId: 5,
          updatedAt: "2021-05-20T13:36:45.131Z",
        },
        {
          commentaries: [],
          createdAt: "2021-05-19T12:03:48.729Z",
          id: 10,
          idUser: 5,
          img: "154e5bc5-69ba-4fdd-9669-7224596a8ff3.jpg",
          like: 0,
          likes: [],
          name: "Зима на берегу",
          nickname: {
            id: 5,
            nick: "MasterJs",
            avatar: "NoAvatar.png",
            createdAt: "2021-05-19T12:03:16.135Z",
            updatedAt: "2021-05-19T12:03:16.135Z",
          },
          nicknameId: 5,
          updatedAt: "2021-05-20T13:36:45.131Z",
        },
      ],
      isLoading: false,
    };

    const action = { type: CLEAR_POSTS };

    const newState = postsReducer(initialState, action);
    expect(newState.posts).toEqual([]);
  });
});
