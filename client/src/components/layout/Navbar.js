import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#">
          <i className="fas fa-sign-out-alt" /> Logout
        </a>
      </li>
    </Fragment>
  );

  return (
    <div>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
