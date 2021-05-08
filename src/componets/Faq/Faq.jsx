import React from 'react';
import Subtitle from '../Subtitle//Subtitle';
import Text from '../Text/Text';
import Accordion from '../Accordion/Accordion';
import Button from '../Button/Button';
import './Faq.scss';

const Faq = () => {
  return (
    <div className='faq'>
      <Subtitle text='Frequently Asked Questions' alignment='center'/>
      <Text text={`Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.`} alignment='center'/>

      <div className='faq__accordions-wrapper'>
        <Accordion title='What is Bookmark?' text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`}/>
        <Accordion title='How can I request a new browser?' text={`Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`}/>
        <Accordion title='Is there a mobile app?' text={`Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.`}/>
        <Accordion title='What about other Chromium browsers?' text={`Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.`}/>
      </div>
      <Button text='More Info' type='primary'/>
    </div>
  )
}

export default Faq;
