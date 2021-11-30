import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  timeout: 8000
});

export default instance;
