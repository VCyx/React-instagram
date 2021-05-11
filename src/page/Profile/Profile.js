import React, {useEffect, useState} from 'react';
import styles from "./Profile.module.scss";
import Icon from '../../components/Icon/Icon'
import testAva from '../../assets/img/post1/avatar.png'
import {withRouter} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {getPostsUser} from "../../@redux/users/operation";
import Button from "../../components/Button/Button";
import {GetPosts} from "../../components/InfinityScroll/GetPosts";
import Loading from "../../components/Loading/Loading";
import PropTypes from 'prop-types'
import {logo} from "../../assets/svg";


const Profile = ({history, location: {state: {name, avatar, postsUserId}}}) => {

  const [page,setPage] = useState(1);
  const test = useSelector(state => state.userReducer.users.posts);  // потрібно змінити запрос з сервера на ліміт\пайдж\юзер\ид
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = 'http://176.105.100.114:7000/';
  const dispatch = useDispatch();

  const handleScroll = () =>{
     setPage(prev => prev + 1 );
   };

 window.onscroll = () =>{
  if(document.documentElement.scrollHeight === document.documentElement.scrollTop+document.documentElement.clientHeight){
    handleScroll()
 }
};
  useEffect(()=>{
    const loadPage = async () =>{
      const newPost = await GetPosts(page);
      setPosts((prev) => [...prev, ...newPost]);
      setLoading(false)
    };
    loadPage();
  },[page]);

  useEffect(() => {
    setLoading(true);
    dispatch(getPostsUser(postsUserId)); //  отримую дані постів конкретного користувача
  }, [dispatch, postsUserId]);


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
      { loading ?
        <Loading loading={loading}/>
        :
        <div className={styles.galleryPosts} >
          {test.map((post,index) => (
            <div key={post.id} className={styles.galleryHover}>
              {console.log(post)}
              <div className={styles.imageHover}>
                <Icon type='like' color='white'/>
                <span className={styles.iconCommentCount}>{post.like}</span>  {/*Додати з сервера*/}
                <Icon className={styles.iconComment} type='comment' color='white'/>
                <span className={styles.iconCommentCount}>{post.commentCount || 22}</span>  {/*Додати з сервера*/}
              </div>
              <img className={styles.galleryImage} src={URL + post.img} alt="logo"/>
              {/*<img className={styles.galleryImage} key={post.id} src={post.url} alt="logo"/>*/}
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