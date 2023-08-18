import './Status.css';
import React, { FC } from 'react';
type StatusProps = {
  isActive: string;
};
const Status: FC<StatusProps> = (props) => {
  const styles = {
    backgroundColor: props.isActive === 'true' ? '#D3F4BE' : '#FFBFBF'
  };

  return (
    <div className='status' style={styles} data-testid='status-tests'>
      {props.isActive === 'true' ? 'Active' : 'Inactive'}
    </div>
  );
};

export default Status;
