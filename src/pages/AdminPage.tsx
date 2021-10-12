import { Button } from "@chakra-ui/react";
;
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "src/redux/app/hook";
import { logoutUser } from "src/redux/features/auth/authSlice";
import { axios } from "src/utils/axios";

interface AdminProps {}

export const AdminPage: React.FC<AdminProps> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => history.push("/login"));
  };

  const handleMe = () => {
    axios.get('/api/me').then((data) => console.log(data))
  }

  return (
    <div>
      <Button onClick={handleLogout}>logout</Button>
      <Button onClick={handleMe}>Me</Button>
      <h1 style={{textAlign: "center"}}>Admin page</h1>
    </div>
  );
};
