import React from "react";
import styles from "./PostItem.module.scss";
import IconWithCount from "../IconWithCount/IconWithCount";
import Comments from "../Comments/Comments";
import Input from "../Input/Input";
import { avaURL, mainURL } from "../../api/AxiosAPI";
import PostHoverLike from "../PostHoverLike/PostHoverLike";

const PostItem = ({ name, picture, likes, comments, nickname }) => {
  const countObjectKeys = (object) => {
    return Object.keys(object).length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={avaURL + nickname.avatar} alt={`${nickname.nick} avatar`} />
        </div>
        <p className={styles.userName}>{nickname.nick}</p>
      </div>
      <div className={styles.postPicture}>
        <img src={mainURL + picture} alt={`${name} post`} />
        <PostHoverLike className={styles.hoverLike} />
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
      <Comments comments={comments} />
      <Input comment />
    </div>
  );
};

export default PostItem;
