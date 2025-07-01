import axios from "axios";

const api = axios.create({
  baseURL: 'https://bookingpod.azurewebsites.net/api/v1/'
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken");
    config.headers.Authorization =` Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default api;