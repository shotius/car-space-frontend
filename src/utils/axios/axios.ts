import axios from "axios";


console.log()
const instance = axios.create({
  withCredentials: true,
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "http://192.162.100.10:3001"
});


export default instance;
