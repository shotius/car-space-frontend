import { axios } from "src/utils/axios";

const autoLogin = async () => {
  try {
    const { data } = await axios
      .get("/api/me");
    return data;
  } catch (error) {
    throw error;
  }
};

const authService = {
  autoLogin,
};

export default authService;
