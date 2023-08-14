import React, { FC } from 'react';
import './Button.css';
export type ButtonProps = {
  value: string;
  type: string;
  onClick?: () => void;
};
const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={'Button-' + props.type}
      onClick={props.onClick}
      data-testid='button-click-test'
    >
      {props.value}
    </button>
  );
};

export default Button;
