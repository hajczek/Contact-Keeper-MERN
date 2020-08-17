import React from "react";
import PropTypes from "prop-types";

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
      <ul className="list" style={{ listStyleType: "none" }}>
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button>Edit</button>
        <button>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
