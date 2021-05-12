import React from "react";
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

const User = ({nick, avatar, history, userId, location}) => {
  const openUserProfile = () => {
      history.push(`/user/${nick}`, {
        nick,
        avatar,
        userId
      })
  };
  return (
    <div>
      <ul>
        <li style={{listStyle: 'none', cursor: 'pointer'}} onClick={openUserProfile}>
          {nick}
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
