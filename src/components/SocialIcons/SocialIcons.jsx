import React from 'react';
import PropTypes from 'prop-types';
import './SocialIcons.scss';

const SocialIcons = ({
  image,
  alt,
}) => {
  return (
    <div className='social-icons'>
      <img className='social-icons__icon' src={image} alt={alt}/>
    </div>
  )
}

SocialIcons.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
}

export default SocialIcons;
