import axios from "axios";

const API_BASE_URL = "http://47.128.74.143:8080";
// const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: API_BASE_URL,
  });
  
export default api;