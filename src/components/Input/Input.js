import React, { useState } from "react";
import style from "./Input.module.scss";
import { addComment } from "../../@redux/posts/operations";
import { useDispatch } from "react-redux";

const Input = ({ postId, comment, modalInput }) => {
  const [userComment, setUserComment] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (commentValue) => {
    dispatch(addComment({ postID: postId, comment: commentValue }));
  };

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
          className={modalInput ? style.modalUserComment : style.commentInput}
          type="text"
          placeholder="Ваш коментар"
          value={userComment}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={modalInput ? style.modalUserSend : style.send}
        >
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
