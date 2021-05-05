import React from "react";
import {withRouter} from 'react-router-dom'

const User = ({name, avatar, history, postsUserId}) => {
  const openUserProfile = () => {
    history.push(`/${postsUserId}`, { // змінити на нейм. тест
      name,
      avatar,
      postsUserId
    })
  };
  return (
    <div>
      <ul>
        <li style={{listStyle: 'none', cursor: 'pointer'}} onClick={openUserProfile}>
          {name}
        </li>
      </ul>
    </div>
  )
};

export default withRouter(User);
