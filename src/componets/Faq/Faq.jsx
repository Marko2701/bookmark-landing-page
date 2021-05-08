import React, { useState } from 'react';
import Subtitle from '../Subtitle//Subtitle';
import Text from '../Text/Text';
import Accordion from '../Accordion/Accordion';
import Button from '../Button/Button';
import './Faq.scss';

const Faq = () => {
  const [showSpoiler, setShowSpoiler] = useState(false);

  const openSpoiler = (e) => {
    setShowSpoiler(true)
  }

  return (
    <div className='faq'>
      <Subtitle text='Frequently Asked Questions' alignment='center'/>
      <Text text="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us." alignment='center'/>

      <div className='faq__itemWrapper'>
        <Accordion title='What is Bookmark?'/>
      </div>
      <Button text='More Info' type='primary'/>
    </div>
  )
}

export default Faq;
