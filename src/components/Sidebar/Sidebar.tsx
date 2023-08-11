import React from 'react';
import './Sidebar.css';
import { Navitem } from '../Nav-items/Navitem';
const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='logo'>
        <img src='assets/img/kv-logo.png' alt='Keyvalue Logo' />
      </div>
      <Navitem src='assets/icons/employees.svg' text='Employee List' />
    </aside>
  );
};

export default Sidebar;
