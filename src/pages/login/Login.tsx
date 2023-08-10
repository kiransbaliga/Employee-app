import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <main className='MainSection'>
        <section className='LeftSection'>
          <img src='assets/img/Banner.png' alt='banner image' />
        </section>
        <section className='RightSection'>
          <div className='logo'>
            <img src='assets/img/kv-logo.png' alt='KeyValue | logo' />
          </div>
          <Input
            value={username}
            onChange={(e) => {
              console.log(e);
              setUsername(e.target.value);
            }}
            label='username'
            type='text'
          />
          <Input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            label='password'
            type='password'
          />
          <Button
            value='Submit'
            onClick={() => {
              console.log(username);
              console.log(pass);
              if (pass != '' && username != '') navigate('/employee');
              else setShowError(true);
            }}
            type='primary'
          />
          {showError && <div className='error-msg'> Username or Password is not valid </div>}
        </section>
      </main>
    </>
  );
};

export default Login;
