import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPayload } from "../../api/authToken";
import { getSingleProfile } from "../../api/profileApi";

const UserProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({ profile: null });

  const getTheProfile = async () => {
    console.log("is this happening?");
    try {
      const response = await getSingleProfile(id);
      console.log("this is the response", response);
      setProfile({ profile: response.data });
      console.log("this is response.data", response.data);
    } catch (error) {
      console.error("An error occured getting all profiles", error);
    }
  };

  useEffect(() => {
    getTheProfile();
  }, []);

  console.log("this is profile", profile);

  const isOwner = getPayload().sub === profile.profile.id;
  console.log("isOwner is", isOwner);

  return (
    <>
      <div>Profile Picture</div>
      <div>Profile Bio Data (editable)</div>
      {isOwner && <button>Edit</button>}
      <div>Chat/Comment feature</div>
      <button>Delete Profile</button>
    </>
  );
};

export default UserProfile;
