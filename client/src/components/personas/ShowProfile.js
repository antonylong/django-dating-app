import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSingleProfile } from "../../api/profileApi";

const ShowProfile = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState({ profile: "" });

  const getOneProfile = async () => {
    try {
      const res = await getSingleProfile(id);
      setPersona({ profile: res.data });
    } catch (err) {
      console.error(`An error occurred fetching profile ${id}`, err);
    }
  };

  useEffect(() => {
    getOneProfile();
  }, []);

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

export default ShowProfile;
