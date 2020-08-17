import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div
      style={{
        display: "block",
        width: "250px",
        backgroundColor: "#ddd",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      <h3>
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={type === "professional" ? "success" : "primary"}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
    </div>
  );
};

export default ContactItem;
