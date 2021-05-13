import React from "react";
import styles from "./Posts.module.scss";

import PostItem from "../PostItem/PostItem";
import Icon from "../Icon/Icon";

// todo временно
import avatar from "../../assets/img/post1/avatar.png";
import MenuButton from "../MenuButton/MenuButton";

const Posts = ({ posts }) => {
  return (
    <>
      <section className={styles.postsContainer}>
        <div className={styles.logo}>
          <Icon type="logo" />
          <MenuButton blue className={styles.menuSmallScreen} />
        </div>
        {posts &&
          posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                avatar={avatar}
                name={post.name}
                picture={post.img}
                likes={post.like}
                comments={post.commentaries}
              />
            );
          })}
      </section>
    </>
  );
};

export default Posts;
