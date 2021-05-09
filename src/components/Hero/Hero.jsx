import React from 'react';
import heroImage from '../../assets//images/illustration-hero.svg';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Button from '../Button/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero__image' src={heroImage} alt=''/>
      <div className='hero__text-wrapper'>
        <Title text='A Simple Bookmark Manager' alignment='center'/>
        <Text text='A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.' alignment='center'/>
        <div className='hero__button-wrapper'>
          <Button className='hero__button' text='Get it on Chrome' type='primary'/>
          <Button text='Get it on Firefox' type='secondary'/>
        </div>
      </div>
    </div>
  )
}

export default Hero;
