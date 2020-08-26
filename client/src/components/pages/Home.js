import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-nextline
  }, []);

  return (
    <div style={content}>
      <div style={box}>
        <ContactForm />
      </div>
      <div style={contactsBox}>
        <ContactFilter />
        <Contacts style={contactsItems} />
      </div>
    </div>
  );
};

const content = {
  display: 'flex',
  flexWrap: 'wrap',
};

const box = {
  display: 'flex',
  width: '50%',
  justifyContent: 'center',
};

const contactsBox = {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  width: '50%',
};

const contactsItems = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
};

export default Home;
