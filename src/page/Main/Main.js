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
        <MainAside />
      </aside>
    </div>
  );
};

export default Main;
