import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    formData: {
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  });

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    };
    console.log("this is a log of handleChange", formData);
    setState({ formData });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8000/accounts/register/",
        state.formData
      );
      console.log(state);
      navigate("/login");
    } catch (err) {
      console.error("Error registering user", err);
    }
  };

  return (
    <div className="reg-container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <form>
            <h1>Register</h1>

            <label className="form-label">Username:</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={state.formData.username}
              onChange={handleChange}
            ></input>
            <br />
            <label className="form-label">Email Address:</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={state.formData.email}
              onChange={handleChange}
            ></input>
            <br />
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Password:</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={state.formData.password}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-md-6">
                <label className="form-label">Confirm Password:</label>
                <input
                  className="form-control"
                  type="password"
                  name="password_confirmation"
                  value={state.formData.password_confirmation}
                  onChange={handleChange}
                ></input>
              </div>
              <div id="passwordHelpBlock" className="form-text">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>
            </div>
            <br />
            <button onClick={handleSubmit}>Register</button>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Registration;
