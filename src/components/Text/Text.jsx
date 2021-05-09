import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Text.scss';

const Text = ({
  text,
  alignment,
  color,
  className,
}) => {
  const textClasses = cx({
    text: true,
    [className]: true,
    'text--left': alignment === 'left',
    'text--right': alignment === 'right',
    'text--center': alignment === 'center',
    'text--color-white': color === 'white'
  });
  return (
      <p className={textClasses}>{text}</p>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  alignment: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

export default Text;
