import { EmployeeType } from '../reducers/employeeReducer';
import baseApi from '../service';

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<EmployeeType[], void>({
      query: () => ({ url: '/employees' })
    })
  })
});

export const { useGetEmployeeListQuery } = employeeApi;
