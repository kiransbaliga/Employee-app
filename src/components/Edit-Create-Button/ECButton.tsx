import './ECButton.css';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
type ECButtonProps = {
  type: 'create' | 'edit' | 'none';
  id: number | null;
};
const ECButton: FC<ECButtonProps> = (props) => {
  const navigate = useNavigate();

  return (
    <button
      className='ecbutton'
      onClick={() => {
        props.type === 'create'
          ? navigate(`/employee/${props.id}/edit`)
          : navigate('/employee/create');
      }}
    >
      <div className={'button-parent ' + props.type}>
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
