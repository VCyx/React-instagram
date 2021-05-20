import React from "react";
import styles from "../User/User.module.scss";
import Icon from "../Icon/Icon";
import MenuButton from "../MenuButton/MenuButton";
import { avaURL } from "../../api/AxiosAPI";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

const User = ({ nick, avatar, userId }) => {
  const history = useHistory();

  return (
    <>
      <div className={styles.icon}>
        <div className={styles.iconBlock}>
          <Icon
            className={styles.iconSize}
            type="logo"
            onClick={() => history.push("/")}
          />
        </div>
        <div className={styles.menuPosition}>
          <MenuButton blue />
        </div>
      </div>
      <div className={styles.user}>
        <img className={styles.avatar} src={avaURL + avatar} alt="logo" />
        <div className={styles.status}>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{nick}</p>
            <Button subscribePersonal subscribeUserID={userId} />
          </div>
          <p className={styles.userStatus}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            dolores.
          </p>
        </div>
      </div>
    </>
  );
};

export default User;
