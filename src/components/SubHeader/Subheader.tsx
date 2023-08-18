import React, { FC } from 'react';
import './Subheader.css';
import ECButton from '../Edit-Create-Button/ECButton';

export type SubHeaderProps = {
  label: string;
  type: 'edit' | 'create' | 'none';
  id: null | number;
};
const Subheader: FC<SubHeaderProps> = (props) => {
  return (
    <div className='Subheader'>
      <div className='heading' data-testid='label-test'>
        {props.label}
      </div>
      <div className='items'>
        {/* <ECButton></ECButton> */}
        <ECButton type={props.type} id={props.id} data-testid='ecbutton-test'></ECButton>
      </div>
    </div>
  );
};

export default Subheader;
