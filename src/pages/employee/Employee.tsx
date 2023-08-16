import './Employee.css';
import { useSelector } from 'react-redux';
import Emplist from '../../components/Emplist/Emplist';
import Emplayout from '../../layout/Emplayout';
import { useGetEmployeeListQuery } from '../api';
import { useEffect } from 'react';

const Employee = () => {
  const employeesData = useSelector((state: any) => state.employees);
  const { data: response, isSuccess } = useGetEmployeeListQuery();

  useEffect(() => {
    if (isSuccess && response) console.log(response);
  }, [response, isSuccess]);

  return (
    <main>
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
