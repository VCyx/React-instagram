import React from "react";
import * as Icons from "../../assets/svg/index";

const Icon = ({ type, color, filled, onClick, className }) => {
  const IconJSX = Icons[type];

  if (!IconJSX) return null;

  return (
    <span onClick={onClick} className={className}>
      {IconJSX({
        color: color,
        filled: filled,
      })}
    </span>
  );
};

export default Icon;
