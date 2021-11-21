import axios from "axios";

export const getMyProfile = (user) => {
  return axios.get(`/personas/myprofile/${user}/`);
};

// userId = 8 for Ciel
// make an endpoint that is /myprofile/${userId} []

// so I log in.
// I make a request for payload().sub which I'll assign const of UID = that.
// and then when I make the request for the endpoint, right???
