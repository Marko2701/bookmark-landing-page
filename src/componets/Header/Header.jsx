import React, { useState } from 'react';
import bookmarkIcon from '../../assets/images/logo-bookmark.svg';
import hamburgerIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import './Header.scss';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className='header'>
      <img src={bookmarkIcon} alt=''/>
      <img src={hamburgerIcon} alt='' onClick={() => setShowMenu(true)}/>
      
      {showMenu && <div className='menuWrapper'>
        <img className='menuWrapper__logo' src={bookmarkIcon} alt=''/>
        <img className='menuWrapper__close' src={closeIcon} alt='' onClick={() => setShowMenu(false)}/>
        <div className='navbar'>
          <button className='navbar__item'>Features</button>
          <button className='navbar__item'>Pricing</button>
          <button className='navbar__item'>Contact</button>
          <button className='navbar__login'>Login</button>
        </div>
      </div>}
    </div>
  )
}
