import axios from "axios";

const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
