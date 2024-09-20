import axios from "axios";

export const dogIns = axios.create({
  baseURL: "https://pi-dogsapi-production.up.railway.app/",
  //baseURL: "http://localhost:3001",
});