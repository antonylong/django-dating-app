import React, { useState, useEffect } from "react";
import { getManyProfiles } from "../../api/profileApi";

const ProfileList = () => {
  const [profiles, setProfiles] = useState({ profile: [] });

  const getProfilesFromApi = async () => {
    console.log("is this happening?");
    try {
      const response = await getManyProfiles();
      console.log("this is the response", response);
      setProfiles({ profile: response.data });
      console.log("this is response.data", response.data);
    } catch (error) {
      console.error("An error occured getting all profiles", error);
    }
  };

  useEffect(() => {
    getProfilesFromApi();
  }, []);

  return (
    <>
      <div>A search/filter bar</div>
      <section>
        {profiles.profile.map((profile) => (
          <>
            <h1 key={profile.id}>{profile.name}</h1>
            <h2>{profile.age}</h2>
            <div>{profile.profile_pic}</div>
            <button>See more</button>
          </>
        ))}
      </section>
    </>
  );
};

export default ProfileList;
