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
      navigate("/newprofile");
    } catch (err) {
      console.error("Error registering user", err);
    }
  };

  return (
    <form>
      <h1>Please Register</h1>

      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={state.formData.username}
        onChange={handleChange}
      ></input>
      <br />
      <label>Email Address:</label>
      <input
        type="text"
        name="email"
        value={state.formData.email}
        onChange={handleChange}
      ></input>
      <br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={state.formData.password}
        onChange={handleChange}
      ></input>
      <br />
      <label>Confirm Password:</label>
      <input
        type="password"
        name="password_confirmation"
        value={state.formData.password_confirmation}
        onChange={handleChange}
      ></input>
      <br />
      <button onClick={handleSubmit}>Register</button>
    </form>
  );
};

export default Registration;
