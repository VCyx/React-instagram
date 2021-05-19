import React from "react";
import style from "./UserContainer.module.scss";
import { useSelector } from "react-redux";
import { avaURL } from "../../api/AxiosAPI";

const UserContainer = () => {
  const userInfo = useSelector((state) => state.userReducer.user.mainUser);
  return (
    <div className={style.userContainer}>
      <div>
        <img
          className={style.userAvatar}
          src={avaURL + userInfo.avatar}
          alt="user avatar"
        />
      </div>
      <p className={style.userName}>{userInfo.nick}</p>
    </div>
  );
};

export default UserContainer;
