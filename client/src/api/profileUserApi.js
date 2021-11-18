import axios from "axios";

const baseUrl = "http://localhost:8000/myprofile";

export const getMyProfile = (uid) => {
  return axios.get(`${baseUrl}/${uid}`);
};

// userId = 8 for Ciel
// make an endpoint that is /myprofile/${userId} []

// so I log in.
// I make a request for payload().sub which I'll assign const of UID = that.
// and then when I make the request for the endpoint, right???
