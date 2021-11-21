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
      <section>
        <h1>{persona.profile.name}</h1>
        <h2>{persona.profile.age} years old</h2>
        <h3>City: {persona.profile.city}</h3>
        <h3>I work as a: {persona.profile.occupation}</h3>
        <p>Bio: {persona.profile.bio}</p>
        <h3>Comments</h3>
      </section>
    </>
  );
};

export default ShowProfile;
