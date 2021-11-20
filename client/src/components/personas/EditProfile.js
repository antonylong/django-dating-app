import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getPayload } from "../../api/authToken";
import ImageUploadField from "./ImageUploadField";
import { getTokenFromLocalStorage } from "../../api/authToken";

const EditProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user: {
      id: "",
      email: "",
      username: "",
    },
  });

  const [formData, setFormData] = useState({
    // should all the formdata be null like in cheeseboard?
    user: "",
    name: "",
    age: "",
    height: "",
    city: "",
    gender: "",
    sexuality: "",
    occupation: "",
    bio: "",
    profile_pic: "",
  });

  // check and get of user id from token

  // get the user from backend to attach to persona
  const getTheUser = async () => {
    const id = getPayload().sub;
    console.log("the user id is:", id);
    const axios = require("axios");
    let config = {
      method: "get",
      url: `http://localhost:8000/accounts/${id}/`,
      headers: {},
    };

    await axios(config)
      .then((response) => {
        setUser({ user: response.data });
        console.log(JSON.stringify(response.data));
        setFormData({ ...formData, user: response.data.id });
      })
      .catch((error) => {
        console.error("Something not right getting the user", error);
      });
  };

  useEffect(() => {
    getTheUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editProfileApi = (id, formData) => {
    const requestConfig = {
      headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
    };

    return axios.put(
      `http://localhost:8000/personas/${id}`,
      formData,
      requestConfig
    );
  };

  const id = formData.id;
  console.log("this is formdataID", id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = getPayload().sub;
    try {
      const res = await editProfileApi(id, formData);
      console.log("this is response", res);
      navigate(`/personas/myprofile/${user}`);
    } catch (err) {
      console.error("Error updating persona data", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePicChange = (url) => {
    setFormData({ ...formData, profile_pic: url });
  };
  console.log("handleChange", formData);

  const userId = user.user.id;
  console.log("can i grab it?", userId);

  // there is a scrolling bug with the modal
  return (
    <>
      <label className="">Username:</label>
      <input
        readOnly
        name="user"
        className="form-control-plaintext"
        value={user.user.username}
      />
      <form className="">
        <div className="col-autos">
          <input
            //readOnly
            name="user"
            className="form-control-plaintext"
          />
        </div>
        <br />
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ichigo"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.age}
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
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="mb-3">
          <label className="form-label">City:</label>
          <input
            className="form-control"
            placeholder="Konoha"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <br />
        <label className="form-label">Gender:</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Nonbinary">Non-Binary</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <label className="form-label">Sexuality:</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="sexuality"
          value={formData.sexuality}
          onChange={handleChange}
        >
          <option>Select Sexuality</option>
          <option value="Straight">Straight</option>
          <option value="Gay">Gay</option>
          <option value="Bisexual">Bisexual</option>
          <option value="Asexual">Asexual</option>
          <option value="Pansexual">Pansexual</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <div className="mb-3">
          <label className="form-label">Occupation:</label>
          <input
            className="form-control"
            placeholder="Chef"
            name="occupation"
            value={formData.occupation}
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
            value={formData.bio}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <br />
        <ImageUploadField
          value={formData.profile_pic}
          name="profile_pic"
          handlePicChange={handlePicChange}
        />
        <br />
        <div className="col-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary mb-3"
          >
            Update Profile
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
