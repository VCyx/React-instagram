import React from 'react';
import MenuButton from "../MenuButton/MenuButton";

const Menu = ({color}) => {
  return (
    <>
      {color ? <MenuButton blue /> : <MenuButton/>}
    </>
  );
};

export default Menu;