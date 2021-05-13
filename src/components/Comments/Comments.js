import React from "react";
import styles from "./Comments.module.scss";

const Comments = ({ comments }) => {
  if (comments.length < 1) {
    return (
      <div className={styles.commentContainer}>
        <p>No comments here. Add first one!</p>
      </div>
    );
  }

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentItem}>
        <p className={styles.commentAuthor}>uncle_drew</p>
        <p className={styles.commentText}>This is a fantastic goal</p>
      </div>
      <div className={styles.commentItem}>
        <p className={styles.commentAuthor}>uncle_drew</p>
        <p className={styles.commentText}>This is a fantastic goal</p>
      </div>
    </div>
  );
};

export default Comments;
