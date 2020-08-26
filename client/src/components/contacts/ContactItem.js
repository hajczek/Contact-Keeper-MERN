import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div style={contactItem}>
      <h3>{name} </h3>
      <ul style={list}>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i>{' '}
            <span style={emailAddress}>{email}</span>
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i> <strong>{phone}</strong>
          </li>
        )}
      </ul>
      <span style={type === 'professional' ? professional : personal}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
      <p>
        <button onClick={() => setCurrent(contact)} style={button}>
          Edit
        </button>
        <button onClick={onDelete} style={button}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

const contactItem = {
  display: 'flex',
  width: '100%',
  backgroundColor: '#eee',
  padding: '20px',
  marginBottom: '10px',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const professional = {
  float: 'right',
  fontSize: '0.9rem',
  color: '#444',
};

const personal = {
  float: 'right',
  fontSize: '0.9rem',
  color: 'green',
};

const list = {
  listStyleType: 'none',
};

const emailAddress = {
  color: 'blue',
};

const button = {
  padding: '5px',
  width: '100px',
  marginTop: '10px',
  marginRight: '10px',
  backgroundColor: '#777',
  border: 'none',
  color: '#fff',
  fontSize: '1.1rem',
};

export default ContactItem;
