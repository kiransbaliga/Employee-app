import baseApi from '../../service';

type LoginPayloadType = {
  email: string;
  password: string;
};

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginPayloadType) => ({
        url: '/employees/login',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation } = loginApi;
