import React from "react";
import style from "./UserContainer.module.scss";
import userLogo from "../../assets/img/userLogo.png";

const UserContainer = () => {
  return (
    <div className={style.userContainer}>
      <div>
        <img className={style.userAvatar} src={userLogo} alt="user avatar" />
      </div>
      <p className={style.userName}>julia_vesniana</p>
    </div>
  );
};

export default UserContainer;
