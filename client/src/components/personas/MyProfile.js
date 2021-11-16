import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPayload } from "../../api/authToken";
import { getSingleProfile } from "../../api/profileApi";

const MyProfile = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState({ profile: "" });

  const getOneProfile = async () => {
    try {
      const res = await getSingleProfile(id);
      setPersona({ profile: res.data });
    } catch (err) {
      console.error(`An error occurred fetching profile ${id}`, err);
    }
  };

  useEffect(() => {
    console.log("are we having a useEffet");
    getOneProfile();
  }, []);

  console.log("this is getPayload", getPayload().sub);

  // this is where we can see the connection between the user (getPayload.sub) and the profile (profile.user = userID)
  const isOwner = getPayload().sub === persona.profile.user;
  console.log("isOwner is", isOwner);

  return (
    <>
      <div>
        <figure>
          <img src={persona.profile.profile_pic} alt="the user profile" />
        </figure>
      </div>
      <h1>{persona.profile.name}</h1>
      <h2>{persona.profile.age} years old</h2>
      <h3>{persona.profile.city}</h3>
      {isOwner && <button>Edit</button>}
      <div>Chat/Comment feature</div>
      <button>Delete Profile</button>
    </>
  );
};

export default MyProfile;
