import React, { FC } from 'react';
import './Navitem.css';
type Navprops = {
  src: string;
  text: string;
};
export const Navitem: FC<Navprops> = (props) => {
  return (
    <nav>
      <a>
        <div className='icon'>
          <img src={props.src} alt='employess icon' width='20px' />
        </div>
        {props.text}
      </a>
    </nav>
  );
};
