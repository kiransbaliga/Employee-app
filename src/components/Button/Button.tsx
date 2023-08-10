import React, { FC } from 'react';
import './Button.css';
type ButtonProps = {
  value: string;
  type: string;
  onClick: () => void;
};
const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={'Button-' + props.type} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
