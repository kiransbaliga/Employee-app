import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './pages/employee/Employee';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employee' element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
