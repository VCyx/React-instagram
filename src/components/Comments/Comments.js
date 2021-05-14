import React from "react";
import styles from "./Comments.module.scss";

const Comments = ({ comments }) => {
  // console.log("comments", comments);
  if (comments.length < 1) {
    return (
      <div className={styles.commentContainer}>
        <p>No comments here. Add first one!</p>
      </div>
    );
  }

  return (
    <div className={styles.commentContainer}>
      {comments.map((eachComment) => {
        return (
          <div key={eachComment.id} className={styles.commentItem}>
            {/*todo Author here*/}
            <p className={styles.commentAuthor}>{eachComment.id}</p>
            <p className={styles.commentText}>{eachComment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
