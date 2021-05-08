import React from 'react';
import arrowIcon from '../../assets/images/icon-arrow.svg';
import Text from '../Text/Text';
import './Accordion.scss';

const Accordion = ({
  title,
}) => {
  return (
    <button className='accordion'>
      <h3 className='accordion__title'>{title}</h3>
      <img className='accordion__icon' src={arrowIcon} alt=''/>
    </button>
  )
}

export default Accordion;
