import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import React from 'react';
import './Employee.css';
import Subheader from '../../components/SubHeader/Subheader';
const Employee = () => {
  return (
    <main>
      <Sidebar />
      <Header />
      <Subheader />
    </main>
  );
};

export default Employee;
