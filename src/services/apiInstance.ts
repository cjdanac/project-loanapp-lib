
import axios, { AxiosError, AxiosInstance } from "axios";
import { Environment } from "../configs";

const apiInstance = axios.create({
  baseURL: Environment.API_URL,
  withCredentials: true

});

apiInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    
    return Promise.reject(error);
  }
);

export { apiInstance};