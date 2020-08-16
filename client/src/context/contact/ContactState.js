import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnsons",
        email: "jill@gmail.com",
        phone: 111 - 111 - 1111,
        type: "personal",
      },
      {
        id: 2,
        name: "Jim Johnsons",
        email: "jim@gmail.com",
        phone: 222 - 111 - 1111,
        type: "personal",
      },
      {
        id: 3,
        name: "Jill Mellissy",
        email: "mellissy@gmail.com",
        phone: 333 - 111 - 1111,
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current ContactState

  // Clear Current Contact

  // Update Contact

  // Filter contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
