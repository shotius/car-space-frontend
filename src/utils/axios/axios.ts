import axios from "axios";


console.log()
const instance = axios.create({
  withCredentials: true,
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "http://localhost:3001"
});


export default instance;
