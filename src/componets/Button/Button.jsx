import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

const Button = ({
  text,
  type = 'primary',
  onClick,
}) => {
  const buttonClasses = cx({
    button: true,
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
  onClick: PropTypes.func
};

export default Button;
