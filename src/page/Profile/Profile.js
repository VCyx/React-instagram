import React, {useEffect, useState} from 'react';
import styles from "./Profile.module.scss";
import Icon from '../../components/Icon/Icon'
import testAva from '../../assets/img/post1/avatar.png'
import {withRouter} from 'react-router'
import {useDispatch, useSelector} from "react-redux";
import {getPostsUser} from "../../@redux/users/operation";
import Button from "../../components/Button/Button";
import {GetPosts} from "../../components/InfinityScroll/GetPosts";


const Profile = ({location: {state: {name, avatar, postsUserId}}}) => {

  const [page,setPage] = useState(1);
  const [posts, setPosts] = useState([]);
 // const [loading, setLoading] = useState(true);

  const URL = 'http://176.105.100.114:7000/';
  const dispatch = useDispatch();

  const handleScroll = () =>{
     setPage(prev => prev + 1 )
   };

window.onscroll = () =>{
  if(document.documentElement.scrollHeight === document.documentElement.scrollTop+document.documentElement.clientHeight){
   handleScroll()
 }
};

  useEffect(()=>{
    const loadPage = async () =>{
      const newPost = await GetPosts(page);
      setPosts((prev) => [...prev, ...newPost])
    };
    loadPage();
  },[page]);

  useEffect(() => {
    dispatch(getPostsUser(postsUserId));
  }, [dispatch, postsUserId]);

  
  const toggleStatus = (e) => {
    e.target.classList.contains(styles['btnSignIn']) ? e.target.textContent = 'Підписатися' : e.target.textContent = 'Відписатися';
    e.target.classList.toggle(styles['btnSignIn']);
  };

  return (
    <div className={styles.container} >
      <div className={styles.icon}>
        <Icon className={styles.iconSize} type='logo'/>
      </div>
      <div className={styles.user}>
        <img className={styles.avatar} src={testAva} alt="logo"/>
        <div className={styles.status}>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{name}</p>
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
      <div className={styles.galleryPosts} >
        {console.log(posts)}
        {posts.map((post) => (
          <div className={styles.galleryHover}>
            <div className={styles.imageHover}>
              <Icon type='like' color='white'/>
                 <span className={styles.iconCommentCount}>22</span>  {/*Додати з сервера*/}
              <Icon className={styles.iconComment} type='comment' color='white'/>
                <span className={styles.iconCommentCount}>15</span>  {/*Додати з сервера*/}
            </div>
            <img className={styles.galleryImage} key={post.id} src={URL + post.img} alt="logo"/>
            {/*<img className={styles.galleryImage} key={post.id} src={post.url} alt="logo"/>*/} - тест
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Profile);