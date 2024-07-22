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
  response => response, // Pass through the response if successful
  async (error: AxiosError) => {
    const { config } = error;

    // If baseURL is not set or an error with baseURL, reconfigure and retry
    if (!apiInstance.defaults.baseURL && config) {
      apiInstance.defaults.baseURL = Environment.API_URL;
      return apiInstance(config as AxiosRequestConfig);
    }

    // Handle other errors
    return Promise.reject(error);
  }
);
 
export { apiInstance };