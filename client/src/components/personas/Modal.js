import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ closeModel }) {
  const navigate = useNavigate();

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="newUser">
          <h3>First time logging in?</h3>
          <p>Please make sure you set up your profile</p>
          <button onClick={() => closeModel(false)}>New Profile</button>
        </div>
        <div className="returnUser">
          <h3>Return user?</h3>
          <p>
            Welcome back! Would you like to see your profile or find a potential
            match?
          </p>
          <button onClick={() => navigate("/all")}>See Matches</button>
          <button onClick={() => navigate("/personas/myprofile/:user")}>
            My Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
