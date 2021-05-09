import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

const Button = ({
  text,
  type = 'primary',
  onClick,
  className,
}) => {
  const buttonClasses = cx({
    button: true,
    [className]: true,
    'button--primary': type === 'primary',
    'button--secondary': type === 'secondary',
    'button--error': type === 'error',
  });
  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
