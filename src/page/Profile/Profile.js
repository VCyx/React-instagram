import React, {useEffect, useState} from 'react';
import styles from "./Profile.module.scss";
import Icon from '../../components/Icon/Icon'
import testAva from '../../assets/img/post1/avatar.png'
import {withRouter} from 'react-router';
import Button from "../../components/Button/Button";
import {GetPosts} from "../../components/InfinityScroll/GetPosts";
import Loading from "../../components/Loading/Loading";
import PropTypes from 'prop-types'


const Profile = ({history, location, location: {state: {nick, avatar, userId}}}) => {
  const urlUser = (location.pathname === `/user/${nick}`);
  const URL = 'http://176.105.100.114:7000/';
  const [page,setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

 window.onscroll = () =>{
  if(document.documentElement.scrollHeight === document.documentElement.scrollTop+document.documentElement.clientHeight){
    setPage(prev => prev + 1 );
 }
};
  useEffect(()=>{
    const loadPage = async () =>{
      const newPost = await GetPosts(page,2,userId);
      setPosts((prev) => [...prev, ...newPost]);
      setLoading(false)
    };
    loadPage();
  },[page]);

  useEffect(() => {
    setLoading(true);
  }, [userId]);


  const toggleStatus = (e) => {
    e.target.classList.contains(styles['btnSignIn']) ? e.target.textContent = 'Підписатися' : e.target.textContent = 'Відписатися';
    e.target.classList.toggle(styles['btnSignIn']);
  };

  return (
    <div className={styles.container} >
      <div className={styles.icon}>
        <Icon className={styles.iconSize} type='logo' onClick={()=>history.push('/')}/>
      </div>
      <div className={styles.user}>
        <img className={styles.avatar} src={testAva} alt="logo"/>
        <div className={styles.status}>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{nick}</p>
            <Button onClick={toggleStatus}
                    className={styles.btnSign}>Підписатися</Button> {/* !!! статус потрібно брати на сервері*/}
          </div>
          <p className={styles.userStatus}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            dolores.</p> {/* Брати з бази даних*/}
        </div>
      </div>
      <div className={styles.blockLine}>
        <div className={styles.lineBlue}/>
        <div className={styles.lineLightBlue}/>
        <div className={styles.lineGrey}/>
      </div>
      { loading ?
        <Loading loading={loading}/>
        :
        <div className={styles.galleryPosts} >
          {posts && posts.map((post, index) => (
            <div key={index} className={styles.galleryHover}>
              <div  className={styles.imageHover}>
                <Icon type='like' color='white'/>
                <span className={styles.iconCommentCount}>{post.like}</span>
                <Icon className={styles.iconComment} type='comment' color='white'/>
                <span className={styles.iconCommentCount}>{post.commentCount || 22}</span>  {/*Додати з сервера*/}
              </div>
              <img className={styles.galleryImage} src={URL + post.img} alt="logo"/>
            </div>
          ))}
        </div>
      }
    </div>
  );
};


Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  postsUserId: PropTypes.number,
};

export default withRouter(Profile);