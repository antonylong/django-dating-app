import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { axiosSearch } from "../../api/profileApi";

const Search = () => {
  const search = "search";
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState({
    profiles: []
  });

  const getSearchesFromApi = async () => {
    try {
      axiosSearch.get(search + "/" + window.location.search).then((res) => {
        setSearchState({ profiles: res.data });
      });
    } catch (error) {
      console.error("An error occured getting the search", error);
    }
  };

  useEffect(() => {
    getSearchesFromApi();
  }, []);

  const handleClick = () => {
    navigate("/all");
  };

  return (
    <>
      <div className="back-btn">
        <button className="btn btn-outline-success mb-3" onClick={handleClick}>
          Go Back
        </button>
      </div>
      <section>
        {searchState.profiles.map((profile) => (
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

export default Search;
