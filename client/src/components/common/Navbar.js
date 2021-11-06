import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Ani-mate</span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/myprofile" className="nav-link">
              My Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
