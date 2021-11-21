import React, { useState, useEffect } from "react";
import { getMyProfile } from "../../api/profileUserApi";
import { getPayload } from "../../api/authToken";
import { useNavigate } from "react-router";
import { deleteTheUser } from "../../api/userApi";

const MyProfile = () => {
  const navigate = useNavigate();

  const [persona, setPersona] = useState({ profile: "" });

  const user = getPayload().sub;
  console.log("this is user", user);

  const getMyProfileApi = async () => {
    try {
      const res = await getMyProfile(user);
      setPersona({ profile: res.data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    // potentially adding an alert to notify users that this will delete the whole user account as well as the profile account.
    try {
      await deleteTheUser(user);
      navigate("/register");
    } catch (error) {
      console.error("failed deleting the user", error);
    }
  };

  useEffect(() => {
    getMyProfileApi();
  }, []);

  // this is to make sure that the user is matched with the profile in a more secure way for the Edit/Delete function
  const isOwner = getPayload().sub === persona.profile.user;
  console.log("isOwner is", isOwner);

  return (
    <>
      <section className="section">
        <div className="container py-5 h-500">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-black">
                    <img
                      src={persona.profile.profile_pic}
                      alt="profile of person"
                      className="img-fluid my-5"
                      width="80"
                      height="400"
                    />
                    <h5>{persona.profile.name}</h5>
                    <p>{persona.profile.bio}</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Stats</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Age</h6>
                          <p className="text-muted">{persona.profile.age}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Height</h6>
                          <p className="text-muted">
                            {persona.profile.height}cm
                          </p>
                        </div>
                      </div>
                      <h6>About Me</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Gender</h6>
                          <p className="text-muted">{persona.profile.gender}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Sexuality</h6>
                          <p className="text-muted">
                            {persona.profile.sexuality}
                          </p>
                        </div>
                        <h6>More</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Bio</h6>
                            <p className="text-muted">{persona.profile.bio}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Occupation</h6>
                            <p className="text-muted">
                              {persona.profile.occupation}
                            </p>
                          </div>
                          {isOwner && (
                            <button
                              className="btn btn-outline-success mb-3"
                              onClick={() =>
                                navigate("/personas/myprofile/:user/edit")
                              }
                            >
                              Edit
                            </button>
                          )}{" "}
                          {isOwner && (
                            <button
                              className="btn btn-outline-success mb-3"
                              onClick={handleDelete}
                            >
                              Delete Profile
                            </button>
                          )}{" "}
                          <h3>Comments</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
