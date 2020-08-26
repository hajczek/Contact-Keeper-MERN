import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div style={contactsFilter}>
      <form style={form}>
        <input
          style={input}
          ref={text}
          type='text'
          placeholder='Filter contacts ...'
          onChange={onChange}
        />
      </form>
    </div>
  );
};

const contactsFilter = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  background: '#eee',
  padding: '20px 0',
  marginBottom: '20px',
};

const form = {
  width: '80%',
};

const input = {
  width: '100%',
  padding: '10px 5px',
  fontSize: '1.2rem',
  border: 'none',
};

export default ContactFilter;
