import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL;

export const getBusinessList = () => {
  const url = `${API_BASE}/business`;
  return axios({
    method: "GET",
    url,
  });
};
