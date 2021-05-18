import React from "react";
import style from "./OtherUsers.module.scss";
import { useHistory } from "react-router-dom";
import { avaURL } from "../../api/AxiosAPI";
import Button from "../Button/Button";

const OtherUsers = ({ title, users, recommendation }) => {
  const history = useHistory();

  const checkUser = (id) => {
    history.push(`/user/${id}`);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.headerContainer}>
        <p className={style.headerItem}>{title}</p>
        <p className={style.headerItem}>Переглянути всі</p>
      </div>
      <ul className={style.usersContainer}>
        {users && users.length > 0 ? (
          users.map((user) => {
            return (
              <li
                onClick={() => checkUser(user.id)}
                className={style.usersItem}
                key={user.userId}
              >
                <div className={style.avatar}>
                  <img
                    src={avaURL + user.avatar}
                    alt="Avatar"
                    width="30"
                    height="30"
                  />
                </div>
                <span className={style.nickname}>{user.nick}</span>
                <span>
                  {" "}
                  {recommendation && (
                    <Button subscribe subscribeUserID={user.userId} />
                  )}
                </span>
              </li>
            );
          })
        ) : (
          <li className={style.noSubscribe}>No subscribed users!</li>
        )}
      </ul>
    </div>
  );
};

export default OtherUsers;
