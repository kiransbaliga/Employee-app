import { addEmployee, deleteEmployee, editEmployee } from '../actions/employee-actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: EmployeeType[] = [
  {
    id: 1,
    name: 'Charles',
    email: 'jamystan@gmail.com',
    password: 'hello@123',
    role: 'Developer',
    department: '7',
    status: true,
    joindate: '01/10/2023',
    experience: '3',
    address: {
      line1: 'line1',
      line2: 'line2',
      pincode: '123455'
    }
  },
  {
    id: 2,
    name: 'jake peralta',
    email: 'jacobperalta@gmail.com',
    password: 'hello@123',
    role: 'Product manager',
    department: '7',
    status: true,
    joindate: '01/10/2023',
    experience: '3',
    address: {
      line1: 'line1',
      line2: 'line2',
      pincode: '608211'
    }
  },
  {
    id: 3,
    name: 'Amy santiago',
    email: 'amysanitago@gmail.com',
    password: 'hello@123',
    role: 'UI',
    department: '7',
    status: true,
    joindate: '01/10/2023',
    experience: '3',
    address: {
      line1: 'line1',
      line2: 'line2',
      pincode: '608211'
    }
  }
];

export type EmployeeType = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  department: string;
  status: boolean | string;
  joindate: string;
  experience: string;
  address: {
    line1: string;
    line2: string;
    pincode: string;
  };
};

// interface createinterface {
//   type: 'EMPLOYEE:CREATE';
//   payload: {
//     employee: EmployeeType;
//   };
// }

// interface editinterface {
//   type: 'EMPLOYEE:EDIT';
//   payload: {
//     employee: EmployeeType;
//   };
// }

// interface deleteinterface {
//   type: 'EMPLOYEE:DELETE';
//   payload: {
//     id: number | string;
//   };
// }

// type Action = createinterface | editinterface | deleteinterface;
const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state = [...state, action.payload];

    return state;
  });

  builder.addCase(editEmployee, (state, action) => {
    const newstate = [...state].filter((item) => String(item.id) != String(action.payload.id));
    const fin = [...newstate, action.payload];

    return fin;
  });

  builder.addCase(deleteEmployee, (state, action) => {
    const newstate = [...state].filter((item) => String(item.id) != String(action.payload.id));

    return newstate;
  });
});

// const employeeReducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'EMPLOYEE:CREATE': {
//       const newstate = [...state, action.payload.employee];

//       return newstate;
//     }
//     case 'EMPLOYEE:EDIT': {
//       console.log('hello' + action.payload.employee);

// const newstate = [...state].filter(
//   (item) => String(item.id) != String(action.payload.employee.id)
// );

// console.log('hi' + newstate);
// const fin = [...newstate, action.payload.employee];

// return fin;
//     }
//     case 'EMPLOYEE:DELETE': {
//       const newstate = [...state].filter((item) => String(item.id) != String(action.payload.id));

//       const fin = [...newstate];

//       return fin;
//     }
//     default:
//       return state;
//   }
// };

export default employeeReducer;
