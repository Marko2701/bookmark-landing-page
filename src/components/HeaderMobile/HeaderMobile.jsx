import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo-bookmark.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/icon-close.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/images/icon-hamburger.svg';
import SocialIcons from '../SocialIcons/SocialIcons';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import './HeaderMobile.scss';

const HeaderMobile = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className='header'>
      <Logo />
      <HamburgerIcon onClick={() => setShowMenu(true)}/>
      
      {showMenu && 
      <div className='header__menu-wrapper'>
        <div className='header__image-wrapper'>
          <Logo />
          <button className='header__close-button' onClick={() => setShowMenu(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className='header__navbar'>
          <button className='header__navbar-item'>Features</button>
          <button className='header__navbar-item'>Pricing</button>
          <button className='header__navbar-item'>Contact</button>
          <button className='header__navbar-login'>Login</button>
        </div>
        <div className='header__social-icons'>
          <SocialIcons className='header__facebook-icon' image={facebookIcon}/>
          <SocialIcons className='header__twitter-icon' image={twitterIcon}/>
        </div>
      </div>}
    </div>
  )
}

export default HeaderMobile;