import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-b7d8.up.railway.app/api"
});

export default API;
