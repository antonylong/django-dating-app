import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPayload } from "../../api/authToken";
import { getSingleProfile } from "../../api/profileApi";

const MyProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({ profile: null });

  const getTheProfile = async () => {
    try {
      const response = await getSingleProfile(id);
      setProfile({ profile: response.data });
      console.log("this is response.data", response.data);
    } catch (error) {
      console.error("An error occured getting all profiles", error);
    }
  };

  useEffect(() => {
    getTheProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("this is profile", profile);

  console.log("this is getPayload", getPayload().sub);

  const isOwner = getPayload().sub === profile.profile.user;
  console.log("isOwner is", isOwner);

  return (
    <>
      <div>
        <figure>
          <img src={profile.profile.profile_pic} alt="the user profile" />
        </figure>
      </div>
      <h1>{profile.profile.name}</h1>
      <h2>{profile.profile.age} years old</h2>
      <h3>{profile.profile.city}</h3>
      {isOwner && <button>Edit</button>}
      <div>Chat/Comment feature</div>
      <button>Delete Profile</button>
    </>
  );
};

export default MyProfile;
