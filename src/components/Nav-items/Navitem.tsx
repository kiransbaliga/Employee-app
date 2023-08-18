import React, { FC } from 'react';
import './Navitem.css';
import { useNavigate } from 'react-router-dom';
type Navprops = {
  src: string;
  text: string;
};
export const Navitem: FC<Navprops> = (props) => {
  const navigate = useNavigate();

  return (
    <nav onClick={() => navigate('/employee')}>
      <a>
        <div className='icon'>
          <img src={props.src} alt='employess icon' width='20px' data-testid='nav-test' />
        </div>
        {props.text}
      </a>
    </nav>
  );
};
