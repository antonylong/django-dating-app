import axios from "axios";

const baseUrl = "/accounts";

export const getAllUsers = () => {
  return axios.get(`${baseUrl}/`);
};

export const getSingleUser = (id) => {
  return axios.get(`${baseUrl}/${id}/`);
};

export const deleteTheUser = (id) => {
  return axios.delete(`${baseUrl}/${id}/`);
};
