import React from 'react';
import cx from 'classnames';
import './Subtitle.scss';

const Subtitle = ({
  text,
  alignment,
}) => {
  const subtitleClasses = cx({
    subtitle: true,
    'subtitle--left': alignment === 'left',
    'subtitle--right': alignment === 'right',
    'subtitle--center': alignment === 'center',
  })
  return (
      <h2 className={subtitleClasses}>{text}</h2>
  )
}

export default Subtitle;
