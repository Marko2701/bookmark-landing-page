import React, { useState } from 'react';
import Subtitle from '../Subtitle/Subtitle';
import Text from '../Text/Text';
import FeatureOne from '../FeatureOne/FeatureOne';
import FeatureTwo from '../FeatureTwo/FeatureTwo';
import FeatureThree from '../FeatureThree/FeatureThree';
import Tab from '../Tab/Tab';
import './Features.scss';

const Features = () => {
  const [showTab, setShowTab] = useState(0);
  return (
    <div className='features'>
      <Subtitle text='Features' alignment='center'/>
      <Text text='Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access then on the go.' alignment='center'/>
      <div className='features__tabs-wrapper'>
        <Tab text='Simple Bookmarking' onClick={() => setShowTab(0)} isActive={showTab === 0} />
        <Tab text='Speedy Searching' onClick={() => setShowTab(1)} isActive={showTab === 1} />
        <Tab text='Easy Sharing' onClick={() => setShowTab(2)} isActive={showTab === 2} />
      </div>

      {showTab === 0 && <FeatureOne />}
      {showTab === 1 && <FeatureTwo />}
      {showTab === 2 && <FeatureThree />}
    </div>
  )
}

export default Features;
