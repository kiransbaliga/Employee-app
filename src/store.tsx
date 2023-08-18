import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import baseApi from './service';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), baseApi.middleware];
  }
});

export default store;
