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
      <div className="search-bar">
        <SearchBar
          value={data.search}
          onChange={(newValue) => setData({ search: newValue })}
          onRequestSearch={() => goSearch(data.search)}
          style={{
            maxWidth: 500
          }}
        />
        <div id="passwordHelpBlock" className="form-text">
          Refine your matches! Search by age, gender, sexuality, city or
          occupation.
        </div>
      </div>
      <section>
        {profiles.profile.map((profile) => (
          <>
            <h1 key={profile.id}>{profile.name}</h1>
            <h2>{profile.age}</h2>
            <img src={profile.profile_pic} alt="profile" />
            <button
              className="btn btn-outline-success mb-3"
              onClick={() => navigate(`/personas/${profile.id}/`)}
            >
              See More
            </button>
          </>
        ))}
      </section>
    </>
  );
};

export default ProfileList;
