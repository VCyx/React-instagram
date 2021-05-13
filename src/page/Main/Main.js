import React from "react";
import styles from "./Main.module.scss";
import Posts from "../../components/Posts/Posts";
import { useSelector } from "react-redux";
import MainAside from "../../components/MainAside/MainAside";

const Main = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  console.log("posts", posts);

  return (
    <div className={styles.container}>
      <div>
        <Posts posts={posts} />
      </div>
      <aside>
        <h1>World</h1>
        {users.map((user) => (
          <User
            key={user.id}
            avatar={user.img}
            nick={user.nick}
            userId={user.id}
          />
        ))}

        <MainAside />
      </aside>
    </div>
  );
};

export default Main;
