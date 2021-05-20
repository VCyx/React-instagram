import React from 'react';
import style from "../Modal/Modal.module.scss";
import {avaURL} from "../../api/AxiosAPI";


const Userpostcomment = ({comments}) => {
  return (
      <div>
        { comments.map((comment, i)=>{
          return (
            <div key={i} className={style.commentContainer}>
              <div className={style.commentUserBlockInfo}>
                <img className={style.avatar} src={avaURL + comment.nickname.avatar} alt="avatar"/>
                <p>{comment.nickname.nick}</p>
              </div>
              <p className={style.commentUser}>{comment.comment}</p>
            </div>
          )
        })}
      </div>
  );
};

export default Userpostcomment;