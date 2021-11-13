import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProfile } from "../../api/profileApi";

const UserProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);

  const getTheProfile = async () => {
    try {
      const res = await getSingleProfile(id);
      setProfile(res.data);
    } catch (err) {
      console.error(`Error occurred getting profile ${id}`, err);
    }
  };

  useEffect(() => {
    getTheProfile();
  }, []);

  console.log("this is profile", profile);

  return (
    <>
      <div>Profile Picture</div>
      <div>Profile Bio Data (editable)</div>
      <button>Edit</button>
      <div>Chat/Comment feature</div>
      <button>Delete Profile</button>
    </>
  );
};

export default UserProfile;
