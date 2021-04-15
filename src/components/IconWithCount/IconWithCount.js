import React from "react";
import Icon from "../Icon/Icon";
import styles from "./IconWithCount.module.scss";
import classNames from "classnames";

const IconWithCount = ({ count, type, onClick, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Icon className={styles.icon} type={type} onClick={onClick} />
      <p>{count}</p>
    </div>
  );
};

export default IconWithCount;
