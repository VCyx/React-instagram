import React from "react";
import style from "./MenuItems.module.scss";
import {useHistory} from "react-router-dom";

const MenuItems = ({active}) => {
  const history = useHistory();

  const exitHandler = () => {
    history.push("/login");
    localStorage.removeItem('token')
  };
  const createHandler = () => {

  };
  return (
    <div className={active ? `${style.active} ${style.menu}` : style["menu"]}>
      <div className={style.menuContent}>
        <ul>
          <li className={style.menuElement} onClick={createHandler}>
            <p>Створити пост</p>
          </li>
          <li className={style.menuElement} onClick={exitHandler}>
            <p>Вихід</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
