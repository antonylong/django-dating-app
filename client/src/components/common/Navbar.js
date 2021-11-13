import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// import { getSingleProfile } from "../../api/profileApi";
// import { getPayload } from "../../api/authToken";

const Navbar = () => {
  const { id } = useParams();

  // const [profile, setProfile] = useState({ profile: null });

  // const getTheProfile = async () => {
  //   try {
  //     const response = await getSingleProfile(id);
  //     setProfile({ profile: response.data });
  //     console.log("this is response.data", response.data);
  //   } catch (error) {
  //     console.error("An error occured getting all profiles", error);
  //   }
  // };

  // useEffect(() => {
  //   getTheProfile();
  // }, []);

  // console.log("this is profile", profile);

  // const isOwner = getPayload().sub === profile.profile.id;
  // console.log("isOwner is", isOwner);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Ani-mate</span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav navbar-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/search" className="nav-link">
              Profiles
            </Link>
            <Link
              to="/myprofile'"
              // {`/myprofile/${id}`}
              className="nav-link"
            >
              My Profile
            </Link>
          </div>
          <div className="nav navbar-nav navbar-right">
            <Link to="/register" className="nav-link navbar-right">
              Register
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
