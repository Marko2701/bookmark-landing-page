import React from 'react';
import Subtitle from '../Subtitle//Subtitle';
import Text from '../Text/Text';
import Button from '../Button/Button';
import featureThreeIcon from '../../assets/images/illustration-features-tab-3.svg';
import './FeatureThree.scss';

const FeatureThree = () => {
  return (
    <div className='featureThree'>
      <img className='featureThree__image' src={featureThreeIcon} alt=''/>
      <div className='featureThree__text-wrapper'>
        <Subtitle 
          text='Share your bookmarks'
          alignment='center'
        />
        <Text text='Easly share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.' alignment='center'/>
        <Button text='More Info' type='primary'/>
      </div>
    </div>
  )
}

export default FeatureThree;
