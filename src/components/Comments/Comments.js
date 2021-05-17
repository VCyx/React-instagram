import React, { useState } from "react";
import styles from "./Comments.module.scss";
import Button from "../Button/Button";

const Comments = ({ comments }) => {
  // console.log("comments", comments);

  const [showMoreComments, setShowMoreComments] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const lastComment = comments[comments.length - 1];

  const clickShowMore = () => {
    setShowMoreComments(true);
    setShowMoreButton(false);
  };

  if (comments.length < 1) {
    return (
      <div className={styles.commentContainer}>
        <p>No comments here. Add first one!</p>
      </div>
    );
  }

  return (
    <>
      {comments.length > 1 && showMoreButton && (
        <Button onClick={clickShowMore} showMore />
      )}

      <div className={styles.commentContainer}>
        {showMoreComments ? (
          comments.map((eachComment) => {
            return (
              <div key={eachComment.id} className={styles.commentItem}>
                <p className={styles.commentAuthor}>
                  {eachComment.nickname.nick}
                </p>
                <p className={styles.commentText}>{eachComment.comment}</p>
              </div>
            );
          })
        ) : (
          <div className={styles.commentItem}>
            <p className={styles.commentAuthor}>{lastComment.nickname.nick}</p>
            <p className={styles.commentText}>{lastComment.comment}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Comments;
