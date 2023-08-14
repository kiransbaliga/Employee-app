const initialState = [
  {
    id: 1,
    name: 'Charles',
    email: 'jamystan@gmail.com',
    password: 'hello@123',
    role: 'Developer',
    department: 7,
    status: true,
    joindate: '01/10/2023',
    experience: 3,
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
    department: 7,
    status: true,
    joindate: '01/10/2023',
    experience: 3,
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
    department: 7,
    status: true,
    joindate: '01/10/2023',
    experience: 3,
    address: {
      line1: 'line1',
      line2: 'line2',
      pincode: '608211'
    }
  }
];

type entry = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  department: number;
  status: boolean;
  joindate: string;
  experience: number;
  address: {
    line1: string;
    line2: string;
    pincode: string;
  };
};

interface createinterface {
  type: 'EMPLOYEE:CREATE';
  payload: {
    employee: entry;
  };
}

interface editinterface {
  type: 'EMPLOYEE:EDIT';
  payload: {
    employee: entry;
  };
}

interface deleteinterface {
  type: 'EMPLOYEE:DELETE';
  payload: {
    id: number | string;
  };
}

type Action = createinterface | editinterface | deleteinterface;
const employeeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newstate = [...state, action.payload.employee];

      return newstate;
    }
    case 'EMPLOYEE:EDIT': {
      console.log('hello' + action.payload.employee);

      const newstate = [...state].filter(
        (item) => String(item.id) != String(action.payload.employee.id)
      );

      console.log('hi' + newstate);
      const fin = [...newstate, action.payload.employee];

      return fin;
    }
    case 'EMPLOYEE:DELETE': {
      const newstate = [...state].filter((item) => String(item.id) != String(action.payload.id));

      const fin = [...newstate];

      return fin;
    }
    default:
      return state;
  }
};

export default employeeReducer;
