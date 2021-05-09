import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo-bookmark.svg';
import Button from '../Button/Button';
import './HeaderDesktop.scss';

const HeaderDesktop = (props) => {
  return (
    <div className='header-desktop'>
      <Logo />
      <div className='header-desktop__navbar'>
          <Link to='/components'><button className='header-desktop__navbar-item'>Components</button></Link>
          <button className='header-desktop__navbar-item'>Features</button>
          <button className='header-desktop__navbar-item'>Pricing</button>
          <button className='header-desktop__navbar-item'>Contact</button>
          <Button className='header-desktop__navbar-login' type='error' text='LOGIN'/>
        </div>
    </div>
  )
}

export default HeaderDesktop;

