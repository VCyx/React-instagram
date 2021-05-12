import React from "react";
import styles from "./PostItem.module.scss";
import testAvatar from "../../assets/img/post1/avatar.png";
import IconWithCount from "../IconWithCount/IconWithCount";
import Button from "../Button/Button";
import Comments from "../Comments/Comments";
import Input from "../Input/Input";
import { mainURL } from "../../api/AxiosAPI";

const PostItem = ({ name, avatar, picture, likes, comments }) => {
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
        <img src={mainURL + picture} alt={`${name} post`} />
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
      {comments.length > 1 && <Button showMore />}
      <Comments comments={comments} />
      <Input comment />
    </div>
  );
};

export default PostItem;
