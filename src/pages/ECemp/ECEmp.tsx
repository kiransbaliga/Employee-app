import CreateInput from '../../components/Create-input/CreateInput';
import Emplayout from '../../layout/Emplayout';
import './ECEmp.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import {
  useCreateEmployeeMutation,
  useEditEmployeeByIdMutation,
  useGetdeptsQuery,
  useGetrolesQuery,
  useLazyGetEmployeeByIdQuery
} from '../api';

const ECEmp = () => {
  const id = useParams();
  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    departmentId: 1,
    department: 1,
    experience: 1,
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
  const [editEmpById] = useEditEmployeeByIdMutation();
  const [createEmployee] = useCreateEmployeeMutation();
  const [role, setrole] = useState({});
  const [dept, setdept] = useState({});
  const { data: roles, isSuccess: rolesuccess } = useGetrolesQuery('');
  const { data: depts, isSuccess: depSuccess } = useGetdeptsQuery('');

  const handleSubmit = () => {
    if (id.id) editEmpById({ id: id.id, ...emp });
    else createEmployee({ ...emp, password: 'hello@123' });
    navigate('/employee');
  };

  useEffect(() => {
    if (id.id) getEmpById(Number(id.id));
  }, []);

  useEffect(() => {
    if (response?.data)
      setEmp({
        ...response.data,
        experience: response.data.exprience,
        department: response.data.departmentId
      });
  }, [response]);

  useEffect(() => {
    const k = {};

    if (roles && rolesuccess) {
      roles.data.map((key) => {
        k[key] = key;
      });
      setrole(k);
    }
  }, [roles, rolesuccess]);

  useEffect(() => {
    const k = {};

    if (depts && depSuccess) {
      depts.data.map((item) => {
        k[item.name] = item.id;
      });
      setdept(k);
    }
  }, [depts, depSuccess]);

  console.log(dept);
  console.log(role);

  return (
    <main className='ecemp-main'>
      <Emplayout type='none' label={!id.id ? 'Create Employee' : 'Edit Employee'} id={Number(id)}>
        <div className='form-layout'>
          <div className='edit-create'>
            <CreateInput
              value={emp.name}
              onChange={(e) => {
                setEmp({ ...emp, name: e.target.value });
              }}
              label='Employee Name'
              type='text'
              options={{}}
            ></CreateInput>
            <CreateInput
              value={emp.email}
              onChange={(e) => {
                setEmp({ ...emp, email: e.target.value });
              }}
              label='Employee email'
              type='text'
              options={{}}
            ></CreateInput>
            <CreateInput
              value={emp.joindate}
              onChange={(e) => {
                setEmp({ ...emp, joindate: e.target.value });
              }}
              label='Joining Date'
              type='text'
              options={{}}
            ></CreateInput>
            <CreateInput
              value={String(emp.experience)}
              onChange={(e) => {
                setEmp({ ...emp, experience: Number(e.target.value) });
              }}
              label='Experience'
              type='text'
              options={{}}
            ></CreateInput>
            <CreateInput
              value={String(emp.department)}
              onChange={(e) => {
                setEmp({ ...emp, department: Number(e.target.value) });
              }}
              label='Department'
              type='select'
              options={dept}
            ></CreateInput>
            <CreateInput
              value={emp.role}
              onChange={(e) => {
                setEmp({ ...emp, role: e.target.value });
              }}
              label='Role'
              type='select'
              options={role}
            ></CreateInput>
            <CreateInput
              value={'' + emp.status}
              onChange={(e) => {
                setEmp({ ...emp, status: e.target.value });
              }}
              label='Status'
              type='select'
              options={{ active: 'active', inactive: 'inactive' }}
            ></CreateInput>
            <div>
              <CreateInput
                value={emp.address.line1}
                onChange={(e) => {
                  setEmp({ ...emp, address: { ...emp.address, line1: e.target.value } });
                }}
                label='Address'
                type='text'
                options={{}}
              ></CreateInput>
              <CreateInput
                value={emp.address.line2}
                onChange={(e) => {
                  setEmp({ ...emp, address: { ...emp.address, line2: e.target.value } });
                }}
                label=''
                type='text'
                options={{}}
              ></CreateInput>
              <CreateInput
                value={emp.address.pincode}
                onChange={(e) => {
                  setEmp({ ...emp, address: { ...emp.address, pincode: e.target.value } });
                }}
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
            <Button value='Save' type='primary' onClick={handleSubmit}></Button>
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
