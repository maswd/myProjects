import axios from "axios";

export const axios = axios.create({
  baseURL: "http://localhost:9000",
  headers: { Auth: "simple Auth" },
  timeout: 3000,
});
