import React, { useState } from "react";
import style from "./MenuButton.module.scss";
import classNames from "classnames";
import MenuItems from "../MenuItems/MenuItems";

const MenuButton = ({ blue, className }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      {/*<div className={style.btnBlock}>*/}
      <div
        onClick={toggleActive}
        className={classNames(style.menuContainer, className)}
      >
        {menuActive ? (
          <div
            onClick={toggleActive}
            className={
              menuActive
                ? classNames(style.close, style.active)
                : classNames(style.close)
            }
          >
            X
          </div>
        ) : (
          <>
            <span
              className={classNames(
                style.plank,
                style.topPlank,
                blue && style.blue
              )}
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
          </>
        )}
        <MenuItems active={menuActive} />
      </div>
      {/*</div>*/}
    </>
  );
};

export default MenuButton;
