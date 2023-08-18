import Status from '../Status/Status';
import './Detail.css';

import React, { FC } from 'react';
type DetailProps = {
  label: string;
  val: string | number;
  type: string;
};
const Detail: FC<DetailProps> = (props) => {
  return (
    <div className='detail'>
      <label className='detail-label' data-testid='detail-test'>
        {props.label}
      </label>
      <div className='emp-data' data-testid='text-test'>
        {props.type === 'status' ? <Status isActive='true' /> : props.val}
      </div>
    </div>
  );
};

export default Detail;
