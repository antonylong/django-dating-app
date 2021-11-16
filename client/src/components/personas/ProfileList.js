import React, { useState, useEffect } from "react";
import { getManyProfiles } from "../../api/profileApi";
import Modal from "./Modal";
import { useNavigate } from "react-router";

const ProfileList = () => {
  const [profiles, setProfiles] = useState({ profile: [] });

  const navigate = useNavigate();

  const getProfilesFromApi = async () => {
    try {
      const response = await getManyProfiles();
      setProfiles({ profile: response.data });
      console.log("this is response.data", response.data);
    } catch (error) {
      console.error("An error occured getting all profiles", error);
    }
  };

  useEffect(() => {
    getProfilesFromApi();
  }, []);

  console.log("this is profiles", profiles);

  const [openModal, setOpenModel] = useState(true);

  return (
    <>
      {openModal && <Modal closeModel={setOpenModel} />}
      <div>A search/filter bar</div>
      <section>
        {profiles.profile.map((profile) => (
          <>
            <h1 key={profile.id}>{profile.name}</h1>
            <h2>{profile.age}</h2>
            <div>{profile.profile_pic}</div>
            <button onClick={() => navigate(`/personas/${profile.id}/`)}>
              See More
            </button>
          </>
        ))}
      </section>
    </>
  );
};

export default ProfileList;
