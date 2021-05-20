import React from "react";
import styles from "./Posts.module.scss";
import PostItem from "../PostItem/PostItem";
import Icon from "../Icon/Icon";
import MenuButton from "../MenuButton/MenuButton";

const Posts = ({ posts }) => {
  return (
    <>
      <section className={styles.postsContainer}>
        <div className={styles.logo}>
          <Icon type="logo" />
        </div>
        <MenuButton blue className={styles.menuSmallScreen} />

        {posts && posts.length > 0 ? (
          posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                id={post.id}
                name={post.name}
                picture={post.img}
                likes={post.likes}
                comments={post.commentaries}
                nickname={post.nickname}
              />
            );
          })
        ) : (
          <h3>No posts yet! Add one, or subscribe to another user!</h3>
        )}
      </section>
    </>
  );
};

export default Posts;
