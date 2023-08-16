// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';

const store = configureStore({
  reducer: {
    employees: employeeReducer
  }
});

export default store;
