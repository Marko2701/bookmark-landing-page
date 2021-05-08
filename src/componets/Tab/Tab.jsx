import React from 'react'
import cx from 'classnames';
import PropTypes from 'prop-types'
import './Tab.scss';

const Tab = ({ 
  text, 
  isActive, 
  onClick 
}) => {
  const classes = cx({
    tab: true,
    'tab--active': isActive,
  });

  return (
    <button className={classes} onClick={onClick}>{text}</button>
  )
}

Tab.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  text: PropTypes.string,
}

export default Tab;