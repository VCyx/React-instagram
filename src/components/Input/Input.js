import React, { useState } from "react";
import style from "./Input.module.scss";

const Input = ({ comment, onSubmit }) => {
  const [userComment, setUserComment] = useState("");

  if (comment) {
    const handleChange = (e) => {
      setUserComment(e.target.value);
    };

    const clearInput = () => {
      setUserComment("");
    };

    return (
      <form
        className={style.commentContainer}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(userComment);
          clearInput();
        }}
      >
        <input
          className={style.commentInput}
          type="text"
          placeholder="Ваш коментар"
          value={userComment}
          onChange={handleChange}
        />
        <button type="submit" className={style.send}>
          Надіслати
        </button>
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
