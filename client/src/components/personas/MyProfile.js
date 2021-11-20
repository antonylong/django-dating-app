import React, { useState, useEffect } from "react";
import { getMyProfile } from "../../api/profileUserApi";
import { getPayload } from "../../api/authToken";
import { useNavigate } from "react-router";
import { deleteTheUser } from "../../api/userApi";

const MyProfile = () => {
  const navigate = useNavigate();

  const [persona, setPersona] = useState({ profile: "" });

  const user = getPayload().sub;
  console.log("this is user", user);

  const getMyProfileApi = async () => {
    try {
      const res = await getMyProfile(user);
      setPersona({ profile: res.data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    // perhaps put an alert [Are you sure you want to delete your account? And then 'If yes, Delete User + Logout + Push to Welcome Page]
    try {
      await deleteTheUser(user);
      navigate("/register");
    } catch (error) {
      console.error("failed deleting the user", error);
    }
  };

  useEffect(() => {
    getMyProfileApi();
  }, []);

  // this is to make sure that the user is matched with the profile in a more secure way for the Edit/Delete function
  const isOwner = getPayload().sub === persona.profile.user;
  console.log("isOwner is", isOwner);

  return (
    <>
      {" "}
      <div>
        {" "}
        <figure>
          <img src={persona.profile.profile_pic} alt="the user profile" />{" "}
        </figure>{" "}
      </div>
      <h1>{persona.profile.name}</h1>
      <h2>{persona.profile.age} years old</h2>
      <h3>City: {persona.profile.city}</h3>
      <h3>I work as a: {persona.profile.occupation}</h3>
      <p>Bio: {persona.profile.bio}</p>
      <p>
        I identify as {persona.profile.gender} and {persona.profile.sexuality}
      </p>
      <p>I am {persona.profile.height}</p>
      {isOwner && (
        <button onClick={() => navigate("/personas/myprofile/:user/edit")}>
          Edit
        </button>
      )}{" "}
      {isOwner && <button onClick={handleDelete}>Delete Profile</button>}{" "}
      <h3>Comments</h3>
    </>
  );
};

export default MyProfile;
