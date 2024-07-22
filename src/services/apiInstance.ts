import axios, { AxiosError, AxiosInstance } from "axios";
import { Environment } from "../configs";

 
const apiInstance = axios.create({
  baseURL: Environment.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
 
apiInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (!apiInstance.defaults.baseURL) {
      apiInstance.defaults.baseURL = Environment.API_URL;
      return apiInstance(error.config)
    }
    return Promise.reject(error);
  }
);
 
export { apiInstance };