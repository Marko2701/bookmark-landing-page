import React, { useState } from 'react';
import Subtitle from '../Subtitle//Subtitle';
import Text from '../Text/Text';
import FeatureOne from '../FeatureOne/FeatureOne';
import FeatureTwo from '../FeatureTwo/FeatureTwo';
import FeatureThree from '../FeatureThree/FeatureThree';
import './Features.scss';

const Features = () => {
  const [showTab, setShowTab] = useState(1);
  return (
    <div className='features'>
      <Subtitle text='Features' alignment='center'/>
      <Text text='Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access then on the go.' alignment='center'/>
      <div className='features__navbar'>
        <button className='features__navbarItem features__navbarItem--active' onClick={() => setShowTab(1)}>Simple Bookmarking</button>
        <button className='features__navbarItem' onClick={() => setShowTab(2)}>Speedy Searching</button>
        <button className='features__navbarItem' onClick={() => setShowTab(3)}>Easy Sharing</button>
      </div>

      {showTab === 1 && <FeatureOne />}
      {showTab === 2 && <FeatureTwo />}
      {showTab === 3 && <FeatureThree />}
    </div>
  )
}

export default Features;
