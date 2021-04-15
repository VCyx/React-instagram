import React from "react";
import styles from "./Posts.module.scss";

import PostItem from "../PostItem/PostItem";
import Icon from "../Icon/Icon";

const Posts = ({ posts }) => {
  return (
    <>
      <section className={styles.postsContainer}>
        <div className={styles.logo}>
          <Icon type="logo" />
        </div>
        {posts &&
          posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                avatar={post.avatar}
                name={post.name}
                picture={post.picture}
                likes={post.likes}
                comments={post.comments}
              />
            );
          })}
      </section>
    </>
  );
};

export default Posts;
