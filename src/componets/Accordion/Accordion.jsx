import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {ReactComponent as ArrowIcon} from '../../assets/images/icon-arrow.svg';
import './Accordion.scss';

const Accordion = ({
  title,
  text,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentClasses = cx({
    'accordion__content': true,
    'accordion__content--open': isOpen,
  });

  const iconClasses = cx({
    'accordion__icon': true,
    'accordion__icon--open': isOpen,
  })

  return (
    <div className='accordion'>
      <button className='accordion__button' onClick={() => setIsOpen(!isOpen)}>
          <span className='accordion__title'>{title}</span>
          <ArrowIcon className={iconClasses} />
      </button>
      <div className={contentClasses}>{text}</div>
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Accordion;
