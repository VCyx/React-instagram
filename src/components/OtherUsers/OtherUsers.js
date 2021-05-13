import React from "react";
import style from "./OtherUsers.module.scss";
import userLogo from "../../assets/img/userLogo.png";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";

const OtherUsers = ({ title, users, recommendation }) => {
  const history = useHistory();

  const checkUser = (nick, userId) => {
    history.push(`/user/${nick}`, {
      nick: nick,
      userId: userId,
    });
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.headerContainer}>
        <p className={style.headerItem}>{title}</p>
        <p className={style.headerItem}>Переглянути всі</p>
      </div>
      <ul className={style.usersContainer}>
        {users.map((user) => {
          return (
            <li
              onClick={() => checkUser(user.nick, user.userId)}
              className={style.usersItem}
              key={user.userId}
            >
              <div className={style.avatar}>
                <img src={userLogo} alt="Avatar" width="30" height="30" />
              </div>
              <span className={style.nickname}>{user.nick}</span>
             <span> {recommendation && <Button subscribe/>}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OtherUsers;
