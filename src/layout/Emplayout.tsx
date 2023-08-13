import Header from './../components/Header/Header';
import Sidebar from './../components/Sidebar/Sidebar';
import Subheader from './../components/SubHeader/Subheader';
import React, { FC } from 'react';

type EmplayoutProps = {
  type: 'create' | 'edit' | 'none';
  label: string;
  id: number | null;
};

const Emplayout: FC<EmplayoutProps> = (props) => {
  return (
    <>
      <Sidebar />
      <Header />
      <Subheader label={props.label} type={props.type} id={props.id} />
      {props.children}
    </>
  );
};

export default Emplayout;
