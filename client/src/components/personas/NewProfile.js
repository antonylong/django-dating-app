import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewProfile = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    formData: {
      user: "",
      age: "",
      height: "",
      city: "",
      gender: "",
      sexuality: "",
      occupation: "",
      bio: "",
      profile_pic: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/personas/", state.formData);
      console.log(state);
      navigate("/login");
    } catch (err) {
      console.error("Error creating persona data", err);
    }
  };

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    };
    console.log("handleChange", formData);
    setState({ formData });
  };

  return (
    <form className="">
      <div className="col-autos">
        <label className="">Username:</label>
        <input
          readOnly
          className="form-control-plaintext"
          value="email@example.com"
        />
      </div>
      <br />
      <div className="mb-3">
        <label className="form-label">Age:</label>
        <input
          type="text"
          className="form-control"
          placeholder="21"
          name="age"
          value={state.formData.age}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="mb-3">
        <label className="form-label">Height (cm):</label>
        <input
          className="form-control"
          placeholder="152"
          name="height"
          value={state.formData.height}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="mb-3">
        <label className="form-label">City:</label>
        <input
          className="form-control"
          placeholder="Paris"
          name="city"
          value={state.formData.city}
          onChange={handleChange}
        />
      </div>
      <br />
      <label className="form-label">Gender:</label>
      <select
        className="form-select"
        aria-label="Default select example"
        name="gender"
        value={state.formData.gender}
        onChange={handleChange}
      >
        <option>Select Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="NONBINARY">Non-Binary</option>
        <option value="OTHER">Other</option>
      </select>
      <br />
      <label className="form-label">Sexuality:</label>
      <select
        className="form-select"
        aria-label="Default select example"
        name="sexuality"
        value={state.formData.sexuality}
        onChange={handleChange}
      >
        <option>Select Sexuality</option>
        <option value="STRAIGHT">Straight</option>
        <option value="GAY">Gay</option>
        <option value="BISEXUAL">Bisexual</option>
        <option value="ASEXUAL">Asexual</option>
        <option value="PANSEXUAL">Pansexual</option>
        <option value="OTHER">Other</option>
      </select>
      <br />
      <div className="mb-3">
        <label className="form-label">Occupation:</label>
        <input
          className="form-control"
          placeholder="Chef"
          name="occupation"
          value={state.formData.occupation}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="mb-3">
        <label className="form-label">Enter Bio:</label>
        <textarea
          className="form-control"
          placeholder="I love walks in the rain..."
          name="bio"
          value={state.formData.bio}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>
      <br />
      <div className="mb-3">
        <label className="form-label">Profile Picture:</label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <br />
      <div className="col-auto">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary mb-3"
        >
          Create New Profile
        </button>
      </div>
    </form>
  );
};

export default NewProfile;
