import React from 'react';
import './Input.scss';

const Input = ({
  type,
  placeholder
}) => {
  return (
      <input className='input' type={type} required placeholder={placeholder}></input>
  )
}

export default Input;
