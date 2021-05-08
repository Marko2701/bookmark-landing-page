import React, { useState } from 'react';
import bookmarkIcon from '../../assets/images/logo-bookmark.svg';
import hamburgerIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import './Header.scss';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className='header'>
      <img src={bookmarkIcon} alt=''/>
      <img src={hamburgerIcon} alt='' onClick={() => setShowMenu(true)}/>
      
      {showMenu && 
      <div className='menuWrapper'>
        <div className='imageWrapper'>
          <img className='imageWrapper__logo' src={bookmarkIcon} alt=''/>
          <img className='imageWrapper__close' src={closeIcon} alt='' onClick={() => setShowMenu(false)}/>
        </div>
        <div className='navbar'>
          <button className='navbar__item'>Features</button>
          <button className='navbar__item'>Pricing</button>
          <button className='navbar__item'>Contact</button>
          <button className='navbar__login'>Login</button>
        </div>
        <div className='socialWrapper'>
          <img className='footer__facebookIcon' src={facebookIcon} alt=''/>
          <img className='footer__twitterIcon' src={twitterIcon} alt=''/>
        </div>
      </div>}
    </div>
  )
}

