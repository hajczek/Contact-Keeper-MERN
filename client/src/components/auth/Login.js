import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div>
      <h2 style={title}>Account Login</h2>
      <form onSubmit={onSubmit} style={loginForm}>
        <div style={content}>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div style={content}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input style={submitBtn} type='submit' value='Login' />
      </form>
    </div>
  );
};

const title = {
  fontSize: '2em',
  paddingBttom: '50px',
  textAlign: 'center',
  marginBottom: '50px',
};

const loginForm = {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  margin: '0 auto',
  fontSize: '1.2rem',
};

const content = {
  display: 'flex',
  width: '400px',
  justifyContent: 'space-between',
  marginBottom: '20px',
};

const submitBtn = {
  backgroundColor: '#d31262',
  border: '0',
  color: '#fff',
  fontSize: '1.3rem',
  padding: '10px 0',
};

export default Login;
