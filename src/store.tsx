// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// export default store;
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
