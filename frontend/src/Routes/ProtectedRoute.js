import axios from "axios";
const URL = "http://localhost:3001";

export const authenticateSignUp = async (data) => {
  try {
    return await axios.post(`${URL}/user/signup`, data);
  } catch (error) {
    return error.response;
  }
};

export const authenticateLogin = async (data) => {
  try {
    const response = await axios.post(`${URL}/user/login`, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
