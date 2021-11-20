import React, { useState, useEffect } from "react";
import { getManyProfiles } from "../../api/profileApi";
import { useNavigate } from "react-router";
import SearchBar from "material-ui-search-bar";

const ProfileList = () => {
  const [profiles, setProfiles] = useState({ profile: [] });
  const [data, setData] = useState({ search: "" });

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

  const goSearch = (e) => {
    navigate({
      pathname: "/search/",
      search: "?search=" + data.search
    });
    window.location.reload();
  };

  return (
    <>
      <SearchBar
        value={data.search}
        onChange={(newValue) => setData({ search: newValue })}
        onRequestSearch={() => goSearch(data.search)}
      />
      <section>
        {profiles.profile.map((profile) => (
          <>
            <h1 key={profile.id}>{profile.name}</h1>
            <h2>{profile.age}</h2>
            <img src={profile.profile_pic} alt="profile" />
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
