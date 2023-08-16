import { EmployeeType } from '../reducers/employeeReducer';
import { createAction } from '@reduxjs/toolkit';

export const addEmployee = createAction<EmployeeType>('EMPLOYEE:CREATE');

export const editEmployee = createAction<EmployeeType>('EMPLOYEE:EDIT');

export const deleteEmployee = createAction<{ id: string | number }>('EMPLOYEE:DELETE');
