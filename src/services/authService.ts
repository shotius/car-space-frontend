import { axios } from "utils/axios";

const autoLogin = () => {
  return axios
    .get("/api/me")
    .then(({data}) => data)
    .catch((error) => {
      throw error;
    });
};

const authService = {
  autoLogin,
};

export default authService;
