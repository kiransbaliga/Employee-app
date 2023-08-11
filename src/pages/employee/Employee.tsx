import React from 'react';
import './Employee.css';
import Emplist from '../../components/Emplist/Emplist';
import Emplayout from '../../layout/Emplayout';
import { data } from '../../constants/data';

const Employee = () => {
  return (
    <main>
      <Emplayout type='edit' label='Employees List'>
        <div className='emp-main'>
          <div className='emp'>Emplyee Name</div>
          <div className='emp'>Email</div>
          <div className='emp'>Joining date</div>
          <div className='emp'>Role</div>
          <div className='emp'>Status</div>
          <div className='emp'>Experience</div>
          <div className='emp'>Address</div>
          <div className='emp'>Department</div>
          <div className='emp'>Action</div>
        </div>
        {data.map((emp) => (
          <Emplist
            key={emp.id}
            id={emp.id}
            name={emp.name}
            email={emp.email}
            role={emp.role}
            departent={emp.department}
            status={'' + emp.status}
            joindate={emp.joindate}
            experience={emp.experience}
            address={emp.address.line1 + ' ,' + emp.address.line2 + ' ,' + emp.address.pincode}
          ></Emplist>
        ))}
      </Emplayout>
    </main>
  );
};

export default Employee;
