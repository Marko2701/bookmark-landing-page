import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Title.scss';

const Title = ({
  text,  
  alignment,
}) => {
  const titleClasses = cx({
    title: true,
    'title--left': alignment === 'left',
    'title--right': alignment === 'right',
    'title--center': alignment === 'center',
  });
  return (
      <h1 className={titleClasses}>{text}</h1>
  )
}

Title.propTypes = {
  text: PropTypes.string,
  alignment: PropTypes.string,
}

export default Title;
