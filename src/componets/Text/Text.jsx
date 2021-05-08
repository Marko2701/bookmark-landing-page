import React from 'react';
import cx from 'classnames';
import './Text.scss';

const Text = ({
  text,
  alignment,
  color,
}) => {
  const textClasses = cx({
    text: true,
    'text--left': alignment === 'left',
    'text--right': alignment === 'right',
    'text--center': alignment === 'center',
    'text--color': color === 'color'
  });
  return (
      <p className={textClasses}>{text}</p>
  )
}

export default Text;
