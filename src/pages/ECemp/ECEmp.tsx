import { data } from '../../constants/data';
import CreateInput from '../../components/Create-input/CreateInput';
import Emplayout from '../../layout/Emplayout';
import './ECEmp.css';

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';

const ECEmp = () => {
  const id = useParams();
  const navigate = useNavigate();

  console.log(id);

  const emp = id.id ? data.find((emp) => emp.id === Number(id.id)) : undefined;

  const [name, setName] = id.id ? useState(String(emp.name)) : useState('');
  const [join, setJoin] = id.id ? useState(emp.joindate) : useState('');
  const [experience, setExperience] = id.id ? useState('' + emp.experience) : useState('');
  const [dept, setDept] = id.id ? useState('' + emp.department) : useState('');
  const [role, setRole] = id.id ? useState(emp.role) : useState('');
  const [status, setStatus] = id.id ? useState(String(emp.status)) : useState('');
  const [line1, setLine1] = id.id ? useState(emp.address.line1) : useState('');
  const [line2, setLine2] = id.id ? useState(emp.address.line2) : useState('');
  const [pin, setPin] = id.id ? useState(emp.address.pincode) : useState('');

  console.log(emp);

  return (
    <main>
      <Emplayout type='none' label={!id.id ? 'Create Employee' : 'Edit Employee'} id={Number(id)}>
        <div className='form-layout'>
          <div className='edit-create'>
            <CreateInput
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              label='Employee Name'
              type='text'
              options={{}}
            ></CreateInput>
            <CreateInput
              value={join}
              onChange={(e) => {
                setJoin(e.target.value);
              }}
              label='Joining Date'
              type='text'
              options={{}}
            ></CreateInput>
            <CreateInput
              value={experience}
              onChange={(e) => {
                setExperience(e.target.value);
              }}
              label='Experience'
              type='text'
              options={{}}
            ></CreateInput>
            <CreateInput
              value={dept}
              onChange={(e) => {
                setDept(e.target.value);
              }}
              label='Department'
              type='select'
              options={{ ui: 1, develop: 2, hr: 3 }}
            ></CreateInput>
            <CreateInput
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              label='Role'
              type='select'
              options={{ ui: 'ui', developer: 'developer' }}
            ></CreateInput>
            <CreateInput
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              label='Status'
              type='select'
              options={{ active: 'active', inactive: 'inactive' }}
            ></CreateInput>
            <div>
              <CreateInput
                value={line1}
                onChange={(e) => setLine1(e.target.value)}
                label='Address'
                type='text'
                options={{}}
              ></CreateInput>
              <CreateInput
                value={line2}
                onChange={(e) => setLine2(e.target.value)}
                label=''
                type='text'
                options={{}}
              ></CreateInput>
              <CreateInput
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                label=''
                type='text'
                options={{}}
              ></CreateInput>
            </div>
            {id.id ? (
              <CreateInput
                value={id.id}
                onChange={(e) => {
                  console.log(e);
                }}
                label='Employee ID'
                type='text'
                options={{}}
              ></CreateInput>
            ) : null}
          </div>
          <div className='button-row'>
            <Button
              value='Save'
              type='primary'
              onClick={() => {
                navigate('/employee');
              }}
            ></Button>
            <Button
              value='Cancel'
              type='secondary'
              onClick={() => {
                navigate('/employee');
              }}
            ></Button>
          </div>
        </div>
      </Emplayout>
    </main>
  );
};

export default ECEmp;
