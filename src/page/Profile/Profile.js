import React from 'react';
import styles from "./Profile.module.scss";
import Icon from '../../components/Icon/Icon'
import testAva from '../../assets/img/post1/avatar.png'


const Profile = ({location: {state: {name, avatar}}}) => {
 // const users = useSelector(state => state.userReducer.users.data);
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon type='logo'/>
      </div>
      <div className={styles.user}>
        <img src={testAva} alt="" width='100px' height='100px'/>
        <div className={styles.status}>
          <p className={styles.userName}>{name}</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, dolores.</span>
        </div>
      </div>
      <div style={{display: 'flex'}}>
        <div className={styles.lineBlue}/>
        <div className={styles.lineLightBlue}/>
        <div className={styles.lineGrey}/>
      </div>

    </div>
  );
};

export default Profile;