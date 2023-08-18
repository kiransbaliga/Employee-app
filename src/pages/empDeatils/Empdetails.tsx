import React, { useEffect, useState } from 'react';
import './Empdetails.css';
import Emplayout from '../../layout/Emplayout';
import Detail from '../../components/Detail/Detail';
import { useParams } from 'react-router-dom';
import { useLazyGetEmployeeByIdQuery } from '../api';

const Empdetails = () => {
  const { id } = useParams();
  const [empData, setEmp] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    departmentId: 1,
    status: true,
    joindate: '',
    exprience: 3,
    address: {
      line1: '',
      line2: '',
      pincode: ''
    }
  });
  const [getEmpById, { data: response }] = useLazyGetEmployeeByIdQuery();

  console.log(empData);

  useEffect(() => {
    getEmpById(Number(id));
  }, []);

  useEffect(() => {
    if (response?.data) setEmp(response.data);
  }, [response]);

  return (
    <main className='detail-main'>
      <Emplayout type='create' label='Employee Details' id={Number(id)}>
        <div className='emp-detail'>
          <Detail type='text' val={empData.name} label='Employee Name'></Detail>
          <Detail type='text' val={empData.joindate} label='Joining Date'></Detail>
          <Detail type='text' val={empData.exprience} label='Experience'></Detail>
          <Detail type='text' val={empData.role} label='Role'></Detail>
          <Detail type='status' val={String(empData.status)} label='Stats'></Detail>
          <Detail type='text' val={empData.email} label='Email'></Detail>
          <Detail
            type='text'
            val={
              empData.address.line1 + ' ,' + empData.address.line2 + ' ,' + empData.address.pincode
            }
            label='Address'
          ></Detail>
          <Detail type='text' val={id} label='Employee Id'></Detail>
          <Detail type='text' val={empData.departmentId} label='Department'></Detail>
        </div>
      </Emplayout>
    </main>
  );
};

export default Empdetails;
