import { data } from '../../constants/data';
import CreateInput from '../../components/Create-input/CreateInput';
import Emplayout from '../../layout/Emplayout';
import './ECEmp.css';

import React from 'react';
import { useParams } from 'react-router-dom';

const ECEmp = () => {
  const id = useParams();

  console.log(id);
  const emp = id.id ? data.find((emp) => emp.id === Number(id.id)) : undefined;

  console.log(emp);

  return (
    <main>
      <Emplayout type='none' label={!id.id ? 'Create Employee' : 'Edit Employee'}>
        <div className='edit-create'>
          <CreateInput label='Employee Name' type='text' options={{}}></CreateInput>
          <CreateInput label='Joining Date' type='text' options={{}}></CreateInput>
          <CreateInput label='Experience' type='text' options={{}}></CreateInput>
          <CreateInput
            label='Department'
            type='select'
            options={{ ui: 1, develop: 2, hr: 3 }}
          ></CreateInput>
          <CreateInput
            label='Role'
            type='select'
            options={{ ui: 'ui', developer: 'developer' }}
          ></CreateInput>
          <CreateInput
            label='Status'
            type='select'
            options={{ active: 'active', inactive: 'inactive' }}
          ></CreateInput>
          <CreateInput label='Address' type='address' options={{}}></CreateInput>
          {id.id ? <CreateInput label='Employee ID' type='text' options={{}}></CreateInput> : null}
        </div>
      </Emplayout>
    </main>
  );
};

export default ECEmp;
