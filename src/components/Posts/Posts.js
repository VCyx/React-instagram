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
          {/*/!*<MenuButton blue className={styles.menuSmallScreen} />*!/ - що він робить?*/}
        </div>
        {posts &&
          posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                name={post.name}
                picture={post.img}
                likes={post.like}
                comments={post.commentaries}
                nickname={post.nickname}
              />
            );
          })}
      </section>
    </>
  );
};

export default Posts;
