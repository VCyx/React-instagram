import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import Icon from "../../components/Icon/Icon";
import { withRouter } from "react-router";
import Button from "../../components/Button/Button";
import { GetPosts } from "../../api/InfinityScroll/GetPosts";
import Loading from "../../components/Loading/Loading";
import { avaURL } from "../../api/AxiosAPI";
import MenuButton from "../../components/MenuButton/MenuButton";
import PropTypes from "prop-types";
import Modal from "../../components/Modal/Modal";
import userLogo from "../../assets/img/userLogo.png";

const Profile = ({
  history,
  location: {
    state: { nick, avatar, userId },
  },
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [showImg, setShowImg] = useState();
  const [showLike, setShowLike] = useState();
  const [showComments, setShowComments] = useState();

  const URL = "http://176.105.100.114:7000/";
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
    const loadPage = async () => {
      const newPost = await GetPosts(page, 2, userId);
      setPosts((prev) => [...prev, ...newPost]);
      setLoading(false);
    };
    loadPage();
  }, [page]);

  useEffect(() => {
    setLoading(true);
  }, [userId]);

  const imageModal = (pic) => {
    setShowImg(pic);
  };
  const likeModal = (lik) => {
    setShowLike(lik);
  };
  const commentModal = (com) => {
    setShowComments(com);
  };
  // let b = null

  // const img = () =>{
  //
  // }
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <div className={styles.iconBlock}>
          <Icon
            className={styles.iconSize}
            type="logo"
            onClick={() => history.push("/")}
          />
        </div>
        <div className={styles.menuPosition}>
          <MenuButton blue />
        </div>
      </div>
      <div className={styles.user}>
        <img className={styles.avatar} src={avaURL + avatar} alt="logo" />
        <div className={styles.status}>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{nick}</p>
            <Button subscribePersonal />
          </div>
          <p className={styles.userStatus}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            dolores.
          </p>
        </div>
      </div>
      <div className={styles.blockLine}>
        <div className={styles.lineBlue} />
        <div className={styles.lineLightBlue} />
        <div className={styles.lineGrey} />
      </div>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className={styles.galleryPosts}>
          {posts &&
            posts.map((post, index) => (
              <div
                key={index}
                className={styles.galleryHover}
                onClick={() => {
                  setModalActive(true);
                  imageModal(post.img);
                  likeModal(post.like);
                  commentModal(post.commentCount);
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
                    {post.commentCount || 22}
                  </span>{" "}
                  {/*Додати з сервера*/}
                </div>
                <img
                  className={styles.galleryImage}
                  src={URL + post.img}
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
            src={!!showImg ? URL + showImg : ""}
            alt="logo"
          />
        </div>
        <div className="modal-msg">
          <div className="modal-msg-user">
            <div className="modal-msg-user-box">
              <img className={styles.avatar} src={userLogo} alt="logo" />
              <div className="modal-msg-user-nick">{nick}</div>
            </div>
            <hr className="modal-msg-hr" />
          </div>
          <div className="modal-msg-posts">posts</div>
          <div className="modal-msg-like">
            <Icon type="like" color="#ABB2C1" className={styles.iconComment} />
            <span className={styles.iconCommentCountModal}>{showLike}</span>
            <Icon
              className={styles.iconComment}
              type="comment"
              color="#ABB2C1"
            />
            <span className={styles.iconCommentCountModal}>
              {showComments || 22}
            </span>
          </div>
          <div className="modal-msg-comments">comments</div>
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
