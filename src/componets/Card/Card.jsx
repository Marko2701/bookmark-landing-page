import React from 'react';
import Button from '../Button/Button';
import './Card.scss';

const Card = ({
  image,
  title,
  text,
}) => {
  return (
    <div className='card'>
      <img class="card__image" src={image} alt=""/>
      <h3 class="card__title">{title}</h3>
      <p class="card__description">{text}</p>
      <Button text='Add & Install Extension' type='primary'/>
    </div>
  )
}

export default Card;
