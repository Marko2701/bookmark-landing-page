import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button/Button';
import './Card.scss';

const Card = ({
  image,
  title,
  text,
  className,
}) => {
  return (
    <div className={cx('card', className)}>
      <img className="card__image" src={image} alt=""/>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{text}</p>
      <Button text='Add & Install Extension' type='primary'/>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
}

export default Card;
