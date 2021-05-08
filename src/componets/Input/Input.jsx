import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  type,
  placeholder,
}) => {
  return (
    <input className='input' type={type} required placeholder={placeholder}></input>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input;
