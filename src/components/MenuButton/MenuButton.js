import React from "react";
import style from "./MenuButton.module.scss";
import classNames from "classnames";

const MenuButton = ({ white }) => {
  return (
    <div className={style.menuContainer}>
      <span className={classNames(style.plank, style.topPlank)} />
      <span className={classNames(style.plank, style.middlePlank)} />
      <span className={classNames(style.plank, style.bottomPlank)} />
    </div>
  );
};

export default MenuButton;
