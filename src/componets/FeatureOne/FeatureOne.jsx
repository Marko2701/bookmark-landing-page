import React from 'react';
import Subtitle from '../Subtitle//Subtitle';
import Text from '../Text/Text';
import Button from '../Button/Button';
import featureOneIcon from '../../assets/images/illustration-features-tab-1.svg';
import './FeatureOne.scss';

const FeatureOne = () => {
  return (
    <div className='featureOne'>
      <img className='featureOne__image' src={featureOneIcon} alt=''/>
      <Subtitle 
        text='Bookmark in one click'
        alignment='center'
      />
      <Text text='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.' alignment='center'/>
      <Button text='More Info' type='primary'/>
    </div>
  )
}

export default FeatureOne;
