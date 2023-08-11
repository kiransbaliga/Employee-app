import './ECButton.css';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEdit } from '@fortawesome/free-solid-svg-icons';
type ECButtonProps = {
  type: 'create' | 'edit';
};
const ECButton: FC<ECButtonProps> = (props) => {
  return (
    <button className='ecbutton'>
      <div className='button-parent'>
        <div className='icon-subheader'>
          {/* <img src='assets/icons/+.svg' alt='' />
           */}
          {props.type === 'edit' ? (
            <FontAwesomeIcon icon={faAdd} size='1x' color='white' />
          ) : (
            <FontAwesomeIcon icon={faEdit} size='1x' color='white' />
          )}
        </div>
        <div className='button-box'>
          {props.type === 'edit' ? 'Create Employee' : 'Edit Employee'}
        </div>
      </div>
    </button>
  );
};

export default ECButton;
