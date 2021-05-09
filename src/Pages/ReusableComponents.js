import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import SocialIcons from '../components/SocialIcons/SocialIcons';
import Subtitle from '../components/Subtitle/Subtitle';
import Tab from '../components/Tab/Tab';
import Text from '../components/Text/Text';
import Title from '../components/Title/Title';
import { Link } from 'react-router-dom';

const ReusableComponents = () => {
  return (
    <div className='resuable-components'>
      <Link to='/'><Button text='BACK TO MAINPAGE' type='primary'/></Link>
      <Accordion />
      <Button />
      <Card />
      <Input />
      <SocialIcons />
      <Subtitle />
      <Tab />
      <Text />
      <Title />
    </div>
  )
}

export default ReusableComponents;

