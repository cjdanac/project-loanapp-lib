import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { Environment } from "../configs";

 
const apiInstance = axios.create({
  baseURL: Environment.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
 
apiInstance.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const { config } = error;

    if (!apiInstance.defaults.baseURL && config) {
      apiInstance.defaults.baseURL = Environment.API_URL;
      return apiInstance(config as AxiosRequestConfig);
    }
    return Promise.reject(error);
  }
);
 
export { apiInstance };