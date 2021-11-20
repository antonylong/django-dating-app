import React, { useState, useEffect } from "react";
import { getMyProfile } from "../../api/profileUserApi";
import { getPayload } from "../../api/authToken";

const MyProfile = () => {
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

  console.log("this is persona", persona);

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
      <p>Bio: {persona.profile.city}</p>
      <p>
        I identify as {persona.profile.gender} and {persona.profile.sexuality}
      </p>
      <p>I am {persona.profile.height}</p>
      {isOwner && <button>Edit</button>}{" "}
      {isOwner && <button>Delete Profile</button>} <h3>Comments</h3>
    </>
  );
};

export default MyProfile;
