import React from "react";
import axios from "axios";

const UserProfile = () => {
  React.useEffect(() => {
    async function getInformation() {
      console.log("before axios request");
      const response = await axios.get("www.localhost:8000/personas/");
      console.log("this is response", response);
    }
    getInformation();
  }, []);

  return (
    <>
      <div>Profile Picture</div>
      <div>Profile Bio Data (editable)</div>
      <button>Eddit</button>
      <div>Chat/Comment feature</div>
      <button>Delete Profile</button>
    </>
  );
};

export default UserProfile;
