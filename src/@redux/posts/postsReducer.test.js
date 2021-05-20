import { LOAD_MAIN_POSTS } from "./types";
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
          like: 2,
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
  });
});
