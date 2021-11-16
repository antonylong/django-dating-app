import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getPayload } from "../../api/authToken";

const NewProfile = () => {
  const navigate = useNavigate();
  const [postimage, setPostImage] = useState(null);
  const [user, setUser] = useState({
    user: {
      id: "",
      email: "",
      username: ""
    }
  });
  const [formData, setFormData] = useState({
    user: "",
    name: "",
    age: "",
    height: "",
    city: "",
    gender: "",
    sexuality: "",
    occupation: "",
    bio: "",
    profile_pic: ""
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
      headers: {}
    };

    await axios(config)
      .then((response) => {
        setUser({ user: response.data });
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Something not right getting the user", error);
      });
  };

  useEffect(() => {
    getTheUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formDataToPost = new FormData();
    formDataToPost.append("name", formData.name);
    formDataToPost.append("age", formData.age);
    formDataToPost.append("height", formData.height);
    formDataToPost.append("city", formData.city);
    formDataToPost.append("gender", formData.gender);
    formDataToPost.append("sexuality", formData.sexuality);
    formDataToPost.append("occupation", formData.occupation);
    formDataToPost.append("bio", formData.bio);
    formDataToPost.append("profile_pic", postimage.profile_pic[0]);
    console.log("form data to post", formDataToPost);

    try {
      await axios.post("http://localhost:8000/personas/", formData);
      console.log(formData);
      navigate("/login");
    } catch (err) {
      console.error("Error creating persona data", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePicChange = async (e) => {
    await setPostImage({
      profile_pic: e.target.files
    });
    console.log(postimage);
  };
  console.log("handleChange", formData);

  return (
    <form className="">
      <div className="col-autos">
        <label className="">Username:</label>
        <input
          readOnly
          name="user"
          className="form-control-plaintext"
          value={user.user.username}
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
        value={formData.sexuality}
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
          placeholder="21"
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
      <div className="mb-3">
        <label className="form-label">Profile Picture:</label>
        <input
          accept="image/*"
          className="form-control"
          type="file"
          id="formFile"
          //value={formData.profile_pic}
          name="profile_pic"
          onChange={handlePicChange}
        />
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
