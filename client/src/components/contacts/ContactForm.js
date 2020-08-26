import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit} style={addContactForm}>
      <h2 style={title}>{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        style={input}
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
        required
      />
      <input
        style={input}
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
        required
      />
      <input
        style={input}
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
        required
      />
      <div style={content}>
        <h5>Contact Type</h5>
        <input
          type='radio'
          name='type'
          value='personal'
          checked={type === 'personal'}
          onChange={onChange}
        />{' '}
        Personal{' '}
        <input
          type='radio'
          name='type'
          value='professional'
          checked={type === 'professional'}
          onChange={onChange}
        />{' '}
        Professional
      </div>
      <div>
        <input
          style={submitBtn}
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
        />
      </div>
      {current && (
        <div>
          <button onClick={clearAll} style={clearBtn}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

const addContactForm = {
  display: 'flex',
  flexDirection: 'column',
  width: '350px',
  fontSize: '1.2rem',
};

const title = {
  fontSize: '2em',
  paddingBttom: '50px',
  textAlign: 'center',
  marginBottom: '50px',
};

const content = {
  display: 'flex',
  width: '350px',
  justifyContent: 'space-between',
  marginBottom: '20px',
};

const input = {
  marginBottom: '10px',
  padding: '5px',
};

const submitBtn = {
  backgroundColor: '#d31262',
  border: '0',
  color: '#fff',
  fontSize: '1.3rem',
  padding: '10px 0',
  width: '100%',
};

const clearBtn = {
  width: '100%',
  backgroundColor: '#777',
  border: '0',
  color: '#fff',
  fontSize: '1.3rem',
  padding: '10px 0',
  marginTop: '10px',
};

export default ContactForm;
