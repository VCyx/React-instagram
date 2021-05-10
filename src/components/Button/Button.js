import React from 'react';
import PropTypes from 'prop-types'

const Button = ({children, className, onClick, disabled,active, ...attrs}) => {
  return (
    <div>
        <button
          {...attrs}
          className={className}
          onClick={onClick}
          disabled={disabled}
        >{children}
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
};

Button.defaultProps = {
  children: 'default props',
  disabled: false,
  className: '',
};

export default Button;