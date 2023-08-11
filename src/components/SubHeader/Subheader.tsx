import React from 'react';
import './Subheader.css';
import ECButton from '../Edit-Create-Button/ECButton';
const Subheader = () => {
  return (
    <div className='Subheader'>
      <div className='heading'>Employee List</div>
      <div className='items'>
        {/* <ECButton></ECButton> */}
        <ECButton></ECButton>
      </div>
    </div>
  );
};

export default Subheader;
