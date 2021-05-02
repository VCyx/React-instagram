import React from "react";
import {withRouter} from 'react-router-dom'

const User = ({name,avatar,history}) =>{
 const openUserProfile = () =>{
    history.push(`/${name}`,{
      name,
      avatar
   })
  };

  return(
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
