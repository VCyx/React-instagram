import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import style from "../../components/Modal/Modal.module.scss";
import Icon from "../../components/Icon/Icon";
import { withRouter } from "react-router";
import { GetPosts } from "../../api/InfinityScroll/GetPosts";
import Loading from "../../components/Loading/Loading";
import { avaURL, mainURL } from "../../api/AxiosAPI";
import PropTypes from "prop-types";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserPage } from "../../@redux/users/operation";
import BrokenLine from "../../components/BrokenLine/BrokenLine";
import User from "../../components/User/User";
import Input from "../../components/Input/Input";
import Userpostcomment from "../../components/UserPostComment/Userpostcomment";

const Profile = () => {
  const paramsUrl = useParams();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.userReducer.user.data);
  const { nick, avatar, userId } = user;

  const [modalActive, setModalActive] = useState(false);
  const [showImg, setShowImg] = useState();
  const [showLike, setShowLike] = useState();
  const [showComments, setShowComments] = useState();
  const [comment, setComment] = useState();
  const [idPost, setIdPost] = useState();

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  window.onscroll = () => {
    if (
      document.documentElement.scrollHeight ===
      document.documentElement.scrollTop + document.documentElement.clientHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    dispatch(getUserPage(paramsUrl.name));
  }, [dispatch, paramsUrl.name]);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const loadPage = async () => {
      const newPost = await GetPosts(page, 2, paramsUrl.name);
      setPosts((prev) => [...prev, ...newPost]);
      setLoading(false);
    };
    loadPage();
  }, [page, paramsUrl.name]);


  console.log(comment)
  return (
    <div className={styles.container}>
      <User nick={nick} avatar={avatar} userId={userId} />
      <BrokenLine />
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className={styles.galleryPosts}>
          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                className={styles.galleryHover}
                onClick={() => {
                  setModalActive(true);
                  setShowImg(post.img);
                  setShowLike(post.like);
                  setShowComments(Object.keys(post.commentaries).length);
                  setComment(post.commentaries);
                  setIdPost(post.id);
                }}
              >
                <div className={styles.imageHover}>
                  <Icon type="like" color="white" />
                  <span className={styles.iconCommentCount}>{post.like}</span>
                  <Icon
                    className={styles.iconComment}
                    type="comment"
                    color="white"
                  />
                  <span className={styles.iconCommentCount}>
                    {Object.keys(post.commentaries).length}
                  </span>{" "}
                </div>
                <img
                  className={styles.galleryImage}
                  src={mainURL + post.img}
                  alt="logo"
                />
              </div>
            ))}
        </div>
      )}

      <Modal activeModal={modalActive} setActiveModal={setModalActive}>
        <div className="modal-picture">
          <img
            className={styles.galleryImageBox}
            src={!!showImg ? mainURL + showImg : ""}
            alt="logo"
          />
        </div>
        <div className="modal-msg">
          <div className="modal-msg-user">
            <div className="modal-msg-user-box">
              <img className={style.avatar} src={avaURL + avatar} alt="logo" />
              <div className="modal-msg-user-nick">{nick}</div>
            </div>
            <hr className="modal-msg-hr" />
          </div>
          <div className="modal-msg-posts">
            {modalActive && <Userpostcomment comments={comment} />}
          </div>
          <div className="modal-msg-like">
            <Icon type="like" color="#ABB2C1" className={styles.iconComment} />
            <span className={styles.iconCommentCountModal}>{showLike}</span>
            <Icon
              className={styles.iconComment}
              type="comment"
              color="#ABB2C1"
            />
            <span className={styles.iconCommentCountModal}>{showComments}</span>
          </div>
          <div className="modal-msg-comments">
            <Input comment modalInput onSubmit postId={idPost}/>
          </div>
        </div>
      </Modal>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  postsUserId: PropTypes.number,
};

export default withRouter(Profile);
