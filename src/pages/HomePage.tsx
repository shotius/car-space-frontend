import React from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/dashboard/">admin page</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <h1>HomePage</h1>
    </div>
  );
};
