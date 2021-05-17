import React from "react";
import classNames from "classnames";
import styles from "./PostHoverLike.module.scss";
import Icon from "../Icon/Icon";

const PostHoverLike = ({ className }) => {
  return (
    <div className={classNames(className, styles.main)}>
      <Icon type="likeHoverIcon" />
    </div>
  );
};

export default PostHoverLike;
