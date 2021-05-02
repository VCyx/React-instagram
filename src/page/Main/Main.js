import React from "react";
import styles from "./Main.module.scss";
import Posts from "../../components/Posts/Posts";
import {like} from "../../assets/svg";
import User from "../../components/User/User";

const posts = [
  {
    id: 1,
    avatar: "../../assets/img/post1/avatar.png",
    name: "karambol_first",
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
    name: "karambol_second",
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
      <aside>
        <h1>World</h1>

        {/*Перехід на конкретного юзера, заглушка*/}
        {posts.map((el) => (
          <User
            key={el.id}
            avatar={el.avatar}
            name={el.name}
          />
        ))}

        {/**/}

      </aside>
    </div>
  );
};

export default Main;
