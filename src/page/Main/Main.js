import React from "react";
import styles from "./Main.module.scss";
import Posts from "../../components/Posts/Posts";

const posts = [
  {
    id: 1,
    avatar: "../../assets/img/post1/avatar.png",
    name: "karambol_a",
    picture: "",
    likes: 125,
    comments: {
      vasya: "test",
      vasya2: "test2",
    },
  },
  {
    id: 2,
    avatar: "../../assets/img/post1/avatar.png",
    name: "karambol_a",
    picture: "",
    likes: 125,
    comments: {
      vasya: "test",
      vasya2: "test2",
    },
  },
];

const Main = () => {
  return (
    <div className={styles.container}>
      <div>
        <Posts posts={posts} />
      </div>
      <aside>World</aside>
    </div>
  );
};

export default Main;
