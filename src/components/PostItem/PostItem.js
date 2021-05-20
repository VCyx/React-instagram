import React, { useState } from "react";
import styles from "./PostItem.module.scss";
import IconWithCount from "../IconWithCount/IconWithCount";
import Comments from "../Comments/Comments";
import Input from "../Input/Input";
import { avaURL, mainURL } from "../../api/AxiosAPI";
import PostHoverLike from "../PostHoverLike/PostHoverLike";
import { toggleLikePost } from "../../@redux/posts/operations";
import { useDispatch, useSelector } from "react-redux";

const PostItem = ({ id, name, picture, likes, comments, nickname }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userReducer.user.mainUser.userId);
  const isLiked = likes.some((likeId) => likeId.like === userId);

  const countObjectKeys = (object) => {
    return Object.keys(object).length;
  };

  const toggleLike = (postID) => {
    dispatch(toggleLikePost(postID));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={avaURL + nickname.avatar} alt={`${nickname.nick} avatar`} />
        </div>
        <p className={styles.userName}>{nickname.nick}</p>
      </div>
      <div className={styles.postPicture} onDoubleClick={() => toggleLike(id)}>
        <img src={mainURL + picture} alt={`${name} post`} />
        <PostHoverLike className={styles.hoverLike} />
      </div>
      <div className={styles.footerIcons}>
        <IconWithCount
          className={styles.footerIconsItem}
          type="like"
          filled={isLiked}
          count={likes.length}
        />
        <IconWithCount
          className={styles.footerIconsItem}
          type="comment"
          count={countObjectKeys(comments)}
        />
      </div>
      <Comments comments={comments} />
      <Input comment postId={id} />
    </div>
  );
};

export default PostItem;
