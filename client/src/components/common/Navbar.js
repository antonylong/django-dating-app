import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// import { getPayload } from "../../api/authToken";
import logo from "../../styles/assets/whitelogo.png";
// import { getSingleUser } from "../../api/userApi";

const Navbar = () => {
  const { id } = useParams();
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

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <img
            src={logo}
            alt=""
            width="40"
            height="35"
            className="d-inline-block align-text-top"
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
            <Link to="/search" className="nav-link">
              Profiles
            </Link>
            <Link to={`/myprofile/${id}`} className="nav-link">
              My Profile
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <button className="nav-link">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
