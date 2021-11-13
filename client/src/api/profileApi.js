// const axios = require("axios");

// let getManyProfiles = {
//   method: "get",
//   url: "http://localhost:8000/personas/",
//   headers: {},
// };

// axios(getManyProfiles)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

import axios from "axios";

const baseUrl = "http://localhost:8000/personas/";

export const getManyProfiles = () => {
  return axios.get(`${baseUrl}`);
};

export const getSingleProfile = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};
