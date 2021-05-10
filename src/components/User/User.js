import React from "react";
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

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

User.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  postsUserId: PropTypes.number
};

export default withRouter(User);
