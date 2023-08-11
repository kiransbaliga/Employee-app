import './ECButton.css';
import React from 'react';

const ECButton = () => {
  return (
    <button className='ecbutton'>
      <div className='button-parent'>
        <div className='icon-subheader'>
          {/* <img src='assets/icons/+.svg' alt='' />
           */}
          +
        </div>
        <div className='button-box'>Create Employee</div>
      </div>
    </button>
  );
};

export default ECButton;
