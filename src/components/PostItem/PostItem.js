import React from "react";
import styles from "./PostItem.module.scss";
import testAvatar from "../../assets/img/post1/avatar.png";
import testPicture from "../../assets/img/post1/picture.png";
import IconWithCount from "../IconWithCount/IconWithCount";

const PostItem = ({ name, avatar, likes, comments }) => {
  const countObjectKeys = (object) => {
    return Object.keys(object).length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={testAvatar} alt={`${name} avatar`} />
        </div>
        <p className={styles.userName}>{name}</p>
      </div>
      <div className={styles.postPicture}>
        <img src={testPicture} alt={`${name} post`} />
      </div>
      <div className={styles.footerIcons}>
        <IconWithCount
          className={styles.footerIconsItem}
          type="like"
          count={likes}
        />
        <IconWithCount
          className={styles.footerIconsItem}
          type="comment"
          count={countObjectKeys(comments)}
        />
      </div>
    </div>
  );
};

export default PostItem;
