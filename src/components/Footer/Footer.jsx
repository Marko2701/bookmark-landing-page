import React from 'react';
import bookmarkIcon from '../../assets/images/logo-bookmark.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import SocialIcons from '../SocialIcons/SocialIcons';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__bookmark-wrapper'>
        <img className='footer__bookmark-image' src={bookmarkIcon} alt=''/>
        <ul className='footer__navbar'>
          <li><button className='footer__navbar-item'>FEATURES</button></li>
          <li ><button className='footer__navbar-item'>PRICING</button></li>
          <li ><button className='footer__navbar-item'>CONTACT</button></li>
        </ul>
      </div>
      <div className='footer__image-wrapper'>
        <SocialIcons image={facebookIcon} />
        <SocialIcons image={twitterIcon} />
      </div>
    </div>
  )
}

export default Footer;
