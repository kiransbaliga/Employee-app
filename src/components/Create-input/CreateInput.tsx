import './CreateInput.css';

import React, { FC } from 'react';
type Inputprops = {
  type: 'text' | 'select' | 'address';
  label: string;
  options: object | null;
  value: string;
  onChange: (e) => void;
};
const CreateInput: FC<Inputprops> = (props) => {
  return (
    <div className='input-parent'>
      <label>{props.label}</label>
      {props.type === 'text' ? (
        <input value={props.value} onChange={props.onChange} placeholder={props.label} />
      ) : null}
      {props.type === 'select' ? (
        <select value={props.value} onChange={props.onChange}>
          {Object.entries(props.options).map(([key, value]) => (
            <option value={value} key={key}>
              {key}
            </option>
          ))}
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
