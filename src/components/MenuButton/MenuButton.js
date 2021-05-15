import React, {useState} from "react";
import style from "./MenuButton.module.scss";
import classNames from "classnames";
import MenuItems from "../MenuItems/MenuItems";

const MenuButton = ({blue, className}) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className={style.btnBlock}>
        <div onClick={() => setMenuActive(!menuActive)}
             className={menuActive ? classNames(style.close, style.active) : classNames(style.close)}>X</div>
        <div onClick={() => setMenuActive(!menuActive)}
             className={menuActive ? classNames(style.menuContainer, style.disabled) : classNames(style.menuContainer, className)}>
          <span className={classNames(style.plank, style.topPlank, blue && style.blue)}/>
          <span className={classNames(style.plank, style.middlePlank, blue && style.blue)}/>
          <span className={classNames(style.plank, style.bottomPlank, blue && style.blue)}/>
        </div>
      </div>
        <MenuItems active={menuActive} />
    </>
  );
};

export default MenuButton;
