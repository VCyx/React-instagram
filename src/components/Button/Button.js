import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { toggleSubscribe } from "../../@redux/users/operation";
import { useDispatch } from "react-redux";
import classNames from "classnames";

const Button = ({
  children,
  className,
  onClick,
  showMore,
  subscribe,
  subscribePersonal,
  auth,
  regist,
  subscribeUserID,
  ...attrs
}) => {

  const dispatch = useDispatch();
  let activeSubscribe = true;

  const toggleStatus = (e) => {
    e.stopPropagation();
     dispatch(toggleSubscribe(subscribeUserID));
    e.target.classList.toggle(styles["btnSignIn"]);

    if(activeSubscribe){
      (e.target.textContent = "Підписатися");
      activeSubscribe = false;
    }else{
      (e.target.textContent = "Відписатися");
      activeSubscribe = true;
    }
  };


  if (showMore)
    return (
      <button onClick={onClick} className={styles.showMore}>
        Показати більше
      </button>
    );
  else if (subscribe)
    return (
      <button onClick={(e) => toggleStatus(e)} className={styles.subscribe}>
        Підписатися
      </button>
    );
  else if (subscribePersonal)
    return (
      <>
        {activeSubscribe ? (<button onClick={(e) => toggleStatus(e)} className={classNames(styles.subscribePersonal,styles.btnSignIn)}>Відписатися</button>)
          :(<button onClick={(e) => toggleStatus(e)} className={classNames(styles.subscribePersonal)}>Підписатися</button>) }
      </>
    );
  else if (auth)
    return (
      <button className={styles.auth} onClick={onClick}>
        Увійти
      </button>
    );
  else if (regist)
    return (
      <button className={styles.regist} onClick={onClick}>
        Зареєструватися
      </button>
    );

  return (
    <div>
      <button {...attrs} className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  showMore: PropTypes.bool,
};

Button.defaultProps = {
  children: "default props",
  disabled: false,
  className: "",
};

export default Button;
