import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exist') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div>
      <h2 style={title}>Account Register</h2>
      <form onSubmit={onSubmit} style={registerForm}>
        <div style={content}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
            minLength='6'
          />
        </div>
        <div style={content}>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input style={submitBtn} type='submit' value='Register' />
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

const registerForm = {
  display: 'flex',
  flexDirection: ' column',
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

export default Register;
