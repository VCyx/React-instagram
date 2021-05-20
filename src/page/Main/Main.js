import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import Posts from "../../components/Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import MainAside from "../../components/MainAside/MainAside";
import { getPostsMain } from "../../@redux/posts/operations";
import { clearPosts, getPostsAll } from "../../@redux/posts/actions";
import { getUserData } from "../../@redux/users/operation";

const Main = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const loading = useSelector((state) => state.postsReducer.isLoading);
  const posts = useSelector((state) => state.postsReducer.posts);
  console.log("posts", posts);

  window.onscroll = () => {
    if (
      document.documentElement.scrollHeight ===
      document.documentElement.scrollTop + document.documentElement.clientHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  const loadPage = async () => {
    const newPost = await getPostsMain(page, 3);
    dispatch(getPostsAll(newPost));
  };

  // to clear posts
  useEffect(() => {
    dispatch(clearPosts());
  }, []);

  useEffect(() => {
    loadPage();
    dispatch(getUserData());
  }, [page]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

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
