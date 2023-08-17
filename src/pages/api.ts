import baseApi from '../service';

// interface bodyCreateEdit {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
//   department: number;
//   status: boolean;
//   joindate: string;
//   experience: number;
//   address: {
//     line1: string;
//     line2: string;
//     pincode: string;
//   };
// }

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => ({ url: '/employees' }),
      providesTags: ['EMP']
    }),
    getEmployeeById: builder.query({
      query: (id: number) => ({ url: `/employees/${id}` })
    }),
    deleteEmployeeById: builder.mutation({
      query: (id: number) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['EMP']
    }),
    editEmployeeById: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/employees/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['EMP']
    }),
    createEmployee: builder.mutation({
      query: (body) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: ['EMP']
    }),
    getroles: builder.query({
      query: () => ({ url: '/roles' })
    }),
    getdepts: builder.query({
      query: () => '/department/'
    })
  })
});

export const {
  useGetEmployeeListQuery,
  useGetEmployeeByIdQuery,
  useLazyGetEmployeeByIdQuery,
  useDeleteEmployeeByIdMutation,
  useEditEmployeeByIdMutation,
  useCreateEmployeeMutation,
  useGetdeptsQuery,
  useLazyGetdeptsQuery,
  useGetrolesQuery,
  useLazyGetrolesQuery
} = employeeApi;
