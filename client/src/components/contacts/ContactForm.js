import React, { useState, useContext } from "react";
import ContactContext from "../../contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Contact</h2>
      <input type="text" placeholder="Name" value={name} onChange={onChange} />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
      />{" "}
      Professional
      <div>
        <input type="submit" value="Add Contact" />
      </div>
    </form>
  );
};

export default ContactForm;
