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
      search: "?search=" + data.search,
    });
    window.location.reload();
  };

  return (
    <>
      <div className="container center col-sm-4">
        <div className="search-bar text-center">
          <SearchBar
            value={data.search}
            onChange={(newValue) => setData({ search: newValue })}
            onRequestSearch={() => goSearch(data.search)}
            style={{
              maxWidth: 500,
            }}
          />
          <div id="passwordHelpBlock" className="form-text">
            Refine your matches! Search by age, gender, sexuality, city or
            occupation.
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {profiles.profile.map((profile) => (
            <>
              <div
                className="card col-sm-4 mt-3 border-secondary text-center"
                width="250"
                height="250"
                margin="auto"
                padding="5"
              >
                <img
                  className="card-img-top"
                  src={profile.profile_pic}
                  alt="profile of the user"
                  width="50"
                  height="400"
                />
                <div className="card-body">
                  <h3 className="card-title" key={profile.id}>
                    {profile.name}
                  </h3>
                  <h4 className="card-text">{profile.age}</h4>
                  <button
                    className="btn btn-outline-success mb-3"
                    onClick={() => navigate(`/personas/${profile.id}/`)}
                  >
                    See More
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileList;
