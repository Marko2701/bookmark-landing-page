import React from 'react';
import Subtitle from '../Subtitle//Subtitle';
import Text from '../Text/Text';
import Button from '../Button/Button';
import featureTwoIcon from '../../assets/images/illustration-features-tab-2.svg';
import './FeatureTwo.scss';

const FeatureTwo = () => {
  return (
    <div className='featureTwo'>
      <img className='featureTwo__image'src={featureTwoIcon} alt=''/>
      <Subtitle 
        text='Intelligent search'
        alignment='center'
      />
      <Text text='Our powerful search featuer will help you find saved sited in no time at all. No need to trawl through all of your bookmarks.' alignment='center'/>
      <Button text='More Info' type='primary'/>
    </div>
  )
}

export default FeatureTwo;
