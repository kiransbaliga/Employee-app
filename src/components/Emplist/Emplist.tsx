import Status from '../Status/Status';
import './Emplist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../actions/employee-actions';

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
  const [delbox, setDelbox] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {delbox ? (
        <div className='delete-alert'>
          <div className='card-box'>
            <div className='close'>
              <button
                onClick={() => {
                  setDelbox(false);
                }}
              >
                x
              </button>
            </div>
            <div className='text'>Are you sure?</div>
            <div className='text-confirm'>Do you really want to delete this employee?</div>
            <div className='buttons'>
              <Button
                value='confirm'
                type='primary'
                onClick={() => {
                  dispatch(
                    deleteEmployee({
                      id: Number(props.id)
                    })
                  );
                  setDelbox(false);
                }}
              ></Button>
              <Button value='cancel' type='secondary' onClick={() => setDelbox(false)}></Button>
            </div>
          </div>
        </div>
      ) : null}
      <div className='emplist-main'>
        <div className='emp' onClick={() => navigate(`/employee/${props.id}`)}>
          {props.name}
        </div>
        <div className='emp' onClick={() => navigate(`/employee/${props.id}`)}>
          {props.email}
        </div>
        <div className='emp' onClick={() => navigate(`/employee/${props.id}`)}>
          {props.joindate}
        </div>
        <div className='emp' onClick={() => navigate(`/employee/${props.id}`)}>
          {props.role}
        </div>
        <div className='emp' onClick={() => navigate(`/employee/${props.id}`)}>
          <Status isActive={props.status}></Status>
        </div>
        <div className='emp' onClick={() => navigate(`/employee/${props.id}`)}>
          {props.experience}
        </div>
        <div className='emp' onClick={() => navigate(`/employee/${props.id}`)}>
          {props.address}
        </div>
        <div className='emp' onClick={() => navigate(`/employee/${props.id}`)}>
          {props.departent}
        </div>
        <div className='emp'>
          <button className='button-action'>
            <FontAwesomeIcon icon={faTrash} size='1x' color='red' onClick={() => setDelbox(true)} />
          </button>
          <button className='button-action' onClick={() => navigate(`/employee/${props.id}/edit`)}>
            <FontAwesomeIcon icon={faEdit} size='1x' color='#03AEEE' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Emplist;
