import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useParams } from "react-router";
// import { getSingleProfile } from "../../api/profileApi";
import { useParams } from "react-router";
// import { getPayload } from "../../api/authToken";
import logo from "../../styles/assets/whitelogo.png";
import { removeToken } from "../../api/authToken";
import { isLoggedIn } from "../../api/authToken";

// import { getSingleUser } from "../../api/userApi";

const Navbar = () => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const { id, user } = useParams();
  // const [account, setAccount] = useState({ account: null });

  // const getTheUser = async () => {
  //   try {
  //     const response = await getSingleUser(id);
  //     setAccount({ account: response.data });
  //     console.log("this is response.data", response.data);
  //   } catch (error) {
  //     console.error("An error occured getting single user", error);
  //   }
  // };

  // useEffect(() => {
  //   getTheUser();
  // }, []);

  // console.log("this is user", user);
  // console.log("this is account", account);

  // console.log("this is getPayload", getPayload().sub);

  // const isOwner = getPayload().sub === account.id;
  // console.log("isOwner is", isOwner);

  const handleClick = () => {
    removeToken();
    navigate("/");
    window.location.reload();
  };

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
