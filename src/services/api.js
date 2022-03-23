import axios from "axios";

export const proWorkingApi = axios.create({
  baseURL: "https://proworking-fake-api.herokuapp.com/",
});
