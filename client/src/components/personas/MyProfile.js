import React, { useState, useEffect } from "react";
import { getMyProfile } from "../../api/profileUserApi";
import { getPayload } from "../../api/authToken";

const MyProfile = () => {
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

  console.log("this is persona", persona);

  useEffect(() => {
    getMyProfileApi();
  }, []);

  return (
    <>
      {" "}
      <div>
        {" "}
        <figure>
          <img src={persona.profile.profile_pic} alt="the user profile" />{" "}
        </figure>{" "}
      </div>
      <h1>{persona.profile.name}</h1>
      <h2>{persona.profile.age} years old</h2>
      <h3>{persona.profile.city}</h3>
      {/* {isOwner && <button>Edit</button>} */}
      <div>Chat/Comment feature</div>
      {/* {isOwner && <button>Delete Profile</button>}{" "} */}
    </>
  );
};

export default MyProfile;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { getPayload } from "../../api/authToken";
// import { getManyProfiles, getSingleProfile } from "../../api/profileApi";
// import { getSingleUser } from "../../api/userApi";

// const MyProfile = () => {
//   const { id } = useParams();
//   const [persona, setPersona] = useState({ profile: "" });
//   const [userAcc, setUserAcc] = useState({ user: "" });
//   const [profiles, setProfiles] = useState({ profile: [] });

//   const accId = getPayload().sub;

//   console.log("this is accId", accId);

//   const getProfilesFromApi = async () => {
//     try {
//       const response = await getManyProfiles();
//       setProfiles({ profile: response.data });
//     } catch (error) {
//       console.error("An error occured getting all profiles", error);
//     }
//   };

//   const userId = profiles.profile;
//   console.log("this is profiles", profiles.profile);
//   console.log("trying to get userId", userId);

//   const filterId = userId.map((id) => id.user);
//   console.log("this is filter id", filterId);
//   if (filterId.data === accId) {
//     console.log("this is working");
//   } else {
//     console.log("no this didnt work");
//   }
//   // match.params.id
//   const userArray = "";
//   console.log(userArray);

//   const getOneProfile = async () => {
//     try {
//       const res = await getSingleProfile(1);
//       setPersona({ profile: res.data });
//     } catch (err) {
//       console.error(`An error occurred fetching profile ${id}`, err);
//     }
//   };

//   const getOneUser = async () => {
//     try {
//       const res = await getSingleUser(accId);
//       setUserAcc({ profile: res.data });
//     } catch (err) {
//       console.error(`An error occurred fetching user`, err);
//     }
//   };

//   useEffect(() => {
//     console.log("are we having a useEffet");
//     getOneProfile();
//     getOneUser();
//     getProfilesFromApi();
//   }, []);

//   console.log("this is userAcc", userAcc);

//   // basically need to search/filter through the userId of the personas.
//   // do i need to getAll

//   console.log("this is getPayload", getPayload().sub);

//   // this is where we can see the connection between the user (getPayload.sub) and the profile (profile.user = userID)
//   const isOwner = getPayload().sub === persona.profile.user;
//   console.log(
//     "this is getpayload",
//     getPayload().sub,
//     "and this is profileuser",
//     persona.profile.user
//   );
//   console.log("isOwner is", isOwner);

//   return (
//     <>
//       <div>
//         <figure>
//           <img src={persona.profile.profile_pic} alt="the user profile" />
//         </figure>
//       </div>
//       <h1>{persona.profile.name}</h1>
//       <h2>{persona.profile.age} years old</h2>
//       <h3>{persona.profile.city}</h3>
//       {isOwner && <button>Edit</button>}
//       <div>Chat/Comment feature</div>
//       {isOwner && <button>Delete Profile</button>}
//     </>
//   );
// };

// export default MyProfile;
