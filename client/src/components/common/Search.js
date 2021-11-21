import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { axiosSearch } from "../../api/profileApi";

const Search = () => {
  const search = "search";
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState({
    profiles: [],
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
      </section>
    </>
  );
};

export default Search;
