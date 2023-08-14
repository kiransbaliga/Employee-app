import React from 'react';
import './Empdetails.css';
import Emplayout from '../../layout/Emplayout';
import Detail from '../../components/Detail/Detail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Empdetails = () => {
  const data = useSelector((state: any) => state.employees);
  const { id } = useParams();
  const employee = data.find((e) => Number(id) === e.id);

  return (
    <main>
      <Emplayout type='create' label='Employee Details' id={Number(id)}>
        <div className='emp-detail'>
          <Detail type='text' val={employee.name} label='Employee Name'></Detail>
          <Detail type='text' val={employee.joindate} label='Joining Date'></Detail>
          <Detail type='text' val={employee.experience} label='Experience'></Detail>
          <Detail type='text' val={employee.role} label='Role'></Detail>
          <Detail type='status' val={String(employee.status)} label='Stats'></Detail>
          <Detail type='text' val={employee.email} label='Email'></Detail>
          <Detail
            type='text'
            val={
              employee.address.line1 +
              ' ,' +
              employee.address.line2 +
              ' ,' +
              employee.address.pincode
            }
            label='Address'
          ></Detail>
          <Detail type='text' val={employee.id} label='Employee Id'></Detail>
          <Detail type='text' val={employee.department} label='Department'></Detail>
        </div>
      </Emplayout>
    </main>
  );
};

export default Empdetails;
