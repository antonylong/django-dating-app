import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/callerFunctions";

const Registration = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    formData: {
      username: "",
      email: "",
      password1: "",
      password2: ""
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
      const res = await registerUser(state.formData);
      console.log(res);
      if (res.status === 201) {
        navigate("/login");
        const currentId = res.data.id;
        console.log(currentId, "this");
      }
    } catch (err) {
      console.error("Error registering user", err);
    }
  };

  return (
    <div>
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
        name="password1"
        value={state.formData.password1}
        onChange={handleChange}
      ></input>
      <br />
      <label>Confirm Password:</label>
      <input
        type="password"
        name="password2"
        value={state.formData.password2}
        onChange={handleChange}
      ></input>
      <br />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Registration;
