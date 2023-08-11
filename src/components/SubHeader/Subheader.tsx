import React, { FC } from 'react';
import './Subheader.css';
import ECButton from '../Edit-Create-Button/ECButton';

type SubHeaderProps = {
  label: string;
  type: 'edit' | 'create' | 'none';
};
const Subheader: FC<SubHeaderProps> = (props) => {
  return (
    <div className='Subheader'>
      <div className='heading'>{props.label}</div>
      <div className='items'>
        {/* <ECButton></ECButton> */}
        <ECButton type={props.type}></ECButton>
      </div>
    </div>
  );
};

export default Subheader;
