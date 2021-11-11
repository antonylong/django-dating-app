import React, { useState, useEffect } from "react";
import { getManyProfiles } from "../../api/profileApi";
import axios from "axios";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  const getProfilesFromApi = async () => {
    console.log("is this happening?");
    try {
      console.log("statement before awaiting getManyProfiles");
      console.log("this is profiles", profiles);
      const { data } = await getManyProfiles();
      console.log("this is data", data);
      // console.log("This is the response", response);
      setProfiles(data.data);
    } catch (error) {
      console.error("An error occured getting all profiles", error);
    }
  };

  useEffect(() => {
    getProfilesFromApi();
  }, []);

  // useEffect(() => {
  //   const getProfilesFromApi = async () => {
  //     const result = await getManyProfiles();
  //     console.log("testing3");

  //     setProfiles(result.data);
  //     console.log("this is results", result);
  //   };
  //   getProfilesFromApi();
  // }, []);

  // useEffect(() => {
  //   async function getManyProfiles() {
  //     console.log("before axios request");
  //     const response = await axios.get("https://axoltlapi.herokuapp.com/");
  //     console.log("before setprofiles function");
  //     setProfiles(response.data);
  //     console.log(response.data);
  //   }
  //   getManyProfiles();
  // }, []);

  return (
    <>
      <div>A search/filter bar</div>
      <section>
        {profiles.map((profile) => (
          <h1 key={profile.id}>{profile.name}</h1>
        ))}
      </section>
      <button>This button will be iterated as well for a 'See More'</button>
    </>
  );
};

export default ProfileList;
