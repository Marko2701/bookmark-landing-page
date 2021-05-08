import React from 'react';
import Text from '../Text/Text';
import Subtitle from '../Subtitle/Subtitle';
import Input from '../Input/Input';
import Button  from '../Button/Button';
import './Newsletter.scss';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <Text className='newsletter__text' color='color' text='35.000+ ALREADY JOINED' alignment='center'/>
      <Subtitle text="Stay up-to-date with what we're doing" alignment='center' color='white'/> 
      <div className='newsletter__button-wrapper'>
        <Input type='email' placeholder='Enter your email address'/>
        <Button text='Contact Us' type='error' className='newsletter__button' /> 
      </div> 
    </div>
  )
}

export default Newsletter;
