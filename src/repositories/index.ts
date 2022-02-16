import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY || "";

const customHeaders = {
  "X-Api-Key": API_KEY,
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: `${API_BASE}/prod`,
  headers: customHeaders,
});

export { axiosInstance };
