import axios from "axios";

const { VITE_TRIP_API_URL, VITE_AUTH_API_URL } = import.meta.env;

// local vue api axios instance
function authAxios() {
  const instance = axios.create({
    baseURL: VITE_AUTH_API_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

function tripAxios() {
  const instance = axios.create({
    baseURL: VITE_TRIP_API_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

export { authAxios, tripAxios };
