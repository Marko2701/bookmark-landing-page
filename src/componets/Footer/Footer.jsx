import React from 'react';
import bookmarkIcon from '../../assets/images/logo-bookmark.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <img className='footer__bookmarkImage' src={bookmarkIcon} alt=''/>
      <ul className='footer__navbar'>
        <li><button className='footer__navbarItem'>FEATURES</button></li>
      </ul>
      <ul className='footer__navbar'>
        <li ><button className='footer__navbarItem'>PRICING</button></li>
      </ul>
      <ul className='footer__navbar'>
        <li ><button className='footer__navbarItem'>CONTACT</button></li>
      </ul>
      <div className='footer__imageWrapper'>
        <img className='footer__facebookIcon' src={facebookIcon} alt=''/>
        <img className='footer__twitterIcon' src={twitterIcon} alt=''/>
      </div>
    </div>
  )
}

export default Footer;
