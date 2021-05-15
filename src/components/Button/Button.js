import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({
  children,
  className,
  onClick,
  showMore,
  subscribe,
  subscribePersonal,
  ...attrs
}) => {
  const toggleStatus = (e) => {
    e.stopPropagation();
    e.target.classList.contains(styles["btnSignIn"])
      ? (e.target.textContent = "Підписатися")
      : (e.target.textContent = "Відписатися");
    e.target.classList.toggle(styles["btnSignIn"]);
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
      <button
        onClick={(e) => toggleStatus(e)}
        className={styles.subscribePersonal}
      >
        Підписатися
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
