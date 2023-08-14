import React, { FC } from 'react';
import './Input.css';
export type InputProp = {
  value: string;
  onChange?: (e) => void;
  label: string;
  // placeholder: string;
  type: 'text' | 'password';
};

const Input: FC<InputProp> = (props) => {
  return (
    <>
      <div className='text-field'>
        <input
          type={props.type}
          required
          onChange={props.onChange}
          value={props.value}
          data-testid='input-test'
        />
        <label>{props.label}</label>
      </div>
    </>
  );
};

export default Input;
