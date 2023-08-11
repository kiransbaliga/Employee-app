import Status from '../Status/Status';
import './Emplist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Empprops = {
  id: number;
  name: string;
  email: string;
  role: string;
  departent: number;
  status: string;
  joindate: string;
  experience: number;
  address: string;
};
const Emplist: FC<Empprops> = (props) => {
  const navigate = useNavigate();

  return (
    <div className='emplist-main' onClick={() => navigate(`/employee/${props.id}`)}>
      <div className='emp'>{props.name}</div>
      <div className='emp'>{props.email}</div>
      <div className='emp'>{props.joindate}</div>
      <div className='emp'>{props.role}</div>
      <div className='emp'>
        <Status isActive={props.status}></Status>
      </div>
      <div className='emp'>{props.experience}</div>
      <div className='emp'>{props.address}</div>
      <div className='emp'>{props.departent}</div>
      <div className='emp'>
        <button className='button-action'>
          <FontAwesomeIcon icon={faTrash} size='1x' color='red' />
        </button>
        <button className='button-action'>
          <FontAwesomeIcon icon={faEdit} size='1x' color='#03AEEE' />
        </button>
      </div>
    </div>
  );
};

export default Emplist;
