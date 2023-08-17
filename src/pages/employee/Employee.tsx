import './Employee.css';
import Emplist from '../../components/Emplist/Emplist';
import Emplayout from '../../layout/Emplayout';
import { useGetEmployeeListQuery } from '../api';
import { useEffect, useState } from 'react';

const Employee = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const { data: response, isSuccess } = useGetEmployeeListQuery('');

  useEffect(() => {
    if (isSuccess && response) setEmployeesData(response.data);
    console.log(employeesData);
  }, [response, isSuccess]);

  return (
    <main className='employee-main'>
      <Emplayout type='edit' label='Employees List' id={null}>
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
        {employeesData.map((emp) => (
          <Emplist
            key={emp.id}
            id={emp.id}
            name={emp.name}
            email={emp.email}
            role={emp.role}
            departent={emp.departmentId || 1}
            status={'' + emp.status}
            joindate={emp.joindate}
            experience={emp.exprience}
            address={emp.address.line1 + ' ,' + emp.address.line2 + ' ,' + emp.address.pincode}
          ></Emplist>
        ))}
      </Emplayout>
    </main>
  );
};

export default Employee;
