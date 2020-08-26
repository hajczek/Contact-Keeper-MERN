import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>
        Hello <i>{user && user.name}</i>
      </li>
      <li>
        <a style={link} onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' /> Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link style={link} to='/register'>
          Register
        </Link>
      </li>
      <li>
        <Link style={link} to='/login'>
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div style={navbar}>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul style={ul}>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

const navbar = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#d31262',
  padding: '20px',
  color: '#fff',
  marginBottom: '40px',
  flexWrap: 'wrap',
};

const ul = {
  listStyleType: 'none',
  display: 'inline-flex',
};

const link = {
  color: '#fff',
  margin: '0 10px',
  height: 'auto',
  textDecoration: 'none',
  fontSize: '1.3rem',
};

export default Navbar;
