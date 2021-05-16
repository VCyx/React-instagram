import React from "react";
import style from "./Input.module.scss";

const Input = (comment) => {
  if (comment) {
    return (
      <form className={style.commentContainer}>
        <input
          className={style.commentInput}
          type="text"
          placeholder="Ваш коментар"
        />
        <span className={style.send}>Надіслати</span>
      </form>
    );
  }
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default Input;
