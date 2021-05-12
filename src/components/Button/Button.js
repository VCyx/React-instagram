import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({
  children,
  className,
  onClick,
  disabled,
  active,
  showMore,
  ...attrs
}) => {
  if (showMore) {
    return (
      <>
        <button className={styles.showMore}>Показати більше</button>
      </>
    );
  }
  return (
    <div>
      <button
        {...attrs}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
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
