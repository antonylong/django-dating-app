import axios from "axios";
import { getTokenFromLocalStorage } from "./authToken";

const baseUrl = "http://localhost:8000/personas";

export const getManyProfiles = () => {
  return axios.get(`${baseUrl}/`);
};

export const getSingleProfile = (id) => {
  return axios.get(`${baseUrl}/${id}/`);
};

export const createProfileConfig = (id, formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  return axios.post(`${baseUrl}/myprofile/${id}`, formData, requestConfig);
};

export const editProfileConfig = (id, formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  return axios.put(`${baseUrl}/myprofile/${id}`, formData, requestConfig);
};

export const deleteProfileConfig = (id) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  return axios.delete(`${baseUrl}/myprofile/${id}`, requestConfig);
};
