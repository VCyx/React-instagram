import React from 'react';
import avaTest from '../../assets/img/post1/avatar.png'
import styles from "./Profile.module.scss";
import Icon from '../../components/Icon/Icon'
import Posts from "../../components/Posts/Posts";


const Profile = ({location:{state:{name, avatar}}}) => {
  return (
    <div className={styles.container}>
       <div className={styles.icon}>
         <Icon type='logo'/>
       </div>
      <div className={styles.user}>
        <img src={avaTest} alt="" width='100px' height='100px'/>
        <div className={styles.status}>
          <p className={styles.userName}> {name}</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, dolores.</span>
        </div>
      </div>
     <div style={{display:'flex'}}>
       <div className={styles.lineBlue}></div>
       <div className={styles.lineLightBlue}></div>
       <div className={styles.lineGrey}></div>
     </div>

    </div>
  );
};

export default Profile;