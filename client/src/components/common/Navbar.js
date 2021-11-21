import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../styles/assets/whitelogo.png";
import { removeToken, isLoggedIn, getPayload } from "../../api/authToken";
import { getMyProfile } from "../../api/profileUserApi";

const Navbar = () => {
  const navigate = useNavigate();

  const user = getPayload().sub;

  const handleClick = () => {
    removeToken();
    navigate("/");
    window.location.reload();
  };

  const [persona, setPersona] = useState({ profile: "" });

  const getMyProfileApi = async () => {
    try {
      const res = await getMyProfile(user);
      setPersona({ profile: res.data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("is this useeffect?");
    getMyProfileApi();
  }, []);

  console.log("this is persona profile", persona.profile.name);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <img
            src={logo}
            alt="ani-mate logo"
            width="40"
            height="35"
            className="d-inline-block align-text-top logo-img"
          />
          Ani-mate
        </span>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>

            {isLoggedIn() ? (
              <>
                <Link to="#" className="nav-link">
                  Welcome {persona.profile.name}
                </Link>
                <Link to="/all" className="nav-link">
                  Profiles
                </Link>
                <Link to={`/personas/myprofile/${user}`} className="nav-link">
                  My Profile
                </Link>

                <button className="nav-link logout-btn" onClick={handleClick}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
