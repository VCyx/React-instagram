import React from "react";
import style from "./MenuButton.module.scss";
import classNames from "classnames";

const MenuButton = ({ blue, className }) => {
  return (
    <div className={classNames(style.menuContainer, className)}>
      <span
        className={classNames(style.plank, style.topPlank, blue && style.blue)}
      />
      <span
        className={classNames(
          style.plank,
          style.middlePlank,
          blue && style.blue
        )}
      />
      <span
        className={classNames(
          style.plank,
          style.bottomPlank,
          blue && style.blue
        )}
      />
    </div>
  );
};

export default MenuButton;
