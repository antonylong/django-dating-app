import axios from "axios";
import { getTokenFromLocalStorage } from "./authToken";

const baseUrl = "/personas";

export const getManyProfiles = () => {
  return axios.get(`${baseUrl}/`);
};

export const getSingleProfile = (id) => {
  return axios.get(`${baseUrl}/${id}/`);
};

export const deleteProfileConfig = (user) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
  };

  return axios.delete(`${baseUrl}/myprofile/${user}/`, requestConfig);
};

export const axiosSearch = axios.create({
  baseURL: "/personas/",
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`
  }
});
