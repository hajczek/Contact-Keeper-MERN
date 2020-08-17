import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div>
      <h3>
        {name}{" "}
        <span className={type === "professional" ? "success" : "primary"}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
    </div>
  );
};

export default ContactItem;
