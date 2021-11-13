import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    formData: {
      username: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    };
    console.log("this is a log of handleChange", formData);
    setState({ formData });
  };

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem("token", token);
    console.log("TOKEN", token);
  };
  // need to set the id here so that we can pull the id from local storage.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/accounts/login/",
        state.formData
      );
      console.log("data", data);
      console.log(state.formData);
      setTokenToLocalStorage(data.token);
      navigate("/myprofile");
    } catch (err) {
      console.error("Error logging in user", err);
    }
  };

  return (
    <form>
      <h1>Please Log in</h1>

      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={state.formData.username}
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
      <button onClick={handleSubmit}>Register</button>
    </form>
  );
};

export default Login;
