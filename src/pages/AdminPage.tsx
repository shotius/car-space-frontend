import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "redux/app/hook";
import { logoutUser } from "redux/features/auth/authSlice";

interface AdminProps {}

export const AdminPage: React.FC<AdminProps> = () => {
        const dispatch = useAppDispatch()
  const handleLogout = () => dispatch(logoutUser());
  return (
    <div>
      <Button onClick={handleLogout}>logout</Button>
      <div>
        Admin Page <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
