import axios from "axios";

export const registerUser = (formData) => {
  return axios.post(`http://localhost:8000/accounts/register/`, formData);
};

export const loginUser = (formData) => {
  return axios.post(`http://localhost:8000/accounts/login/`, formData);
};
