import React from 'react';
import Subtitle from '../Subtitle/Subtitle';
import Text from '../Text/Text';
import Card from '../Card/Card';
import chromeIcon from '../../assets/images/logo-chrome.svg';
import firefoxIcon from '../../assets/images/logo-firefox.svg';
import operaIcon from '../../assets/images/logo-opera.svg';
import './Extension.scss';

const Extension = () => {
  return (
    <div className='extension'>
      <Subtitle text='Download the extension' alignment='center'/>
      <Text className='extension__text' text="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize." alignment='center'/>
      <div className='extension__card-wrapper'>
        <Card className='extension__chrome' image={chromeIcon} title='Add to Chrome' text='Minimum version 62'/>
        <Card className='extension__firefox' image={firefoxIcon} title='Add to Firefox' text='Minimum version 55'/>
        <Card className='extension__opera' image={operaIcon} title='Add to Opera' text='Minimum version 46'/>       
      </div>
    </div>
  )
}

export default Extension;
