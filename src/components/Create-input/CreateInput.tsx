import './CreateInput.css';

import React, { FC } from 'react';
type Inputprops = {
  type: 'text' | 'select' | 'address';
  label: string;
  options: object | null;
};
const CreateInput: FC<Inputprops> = (props) => {
  return (
    <div className='input-parent'>
      <label>{props.label}</label>
      {props.type === 'text' ? <input /> : null}
      {props.type === 'select' ? (
        <select>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>
      ) : null}
      {props.type === 'address' ? (
        <>
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </>
      ) : null}
    </div>
  );
};

export default CreateInput;
