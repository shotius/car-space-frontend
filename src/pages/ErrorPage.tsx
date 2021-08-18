import React from "react";
import { Link } from "react-router-dom";

interface ErrorPageProps {}

export const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
      </ul>
      <h1 style={{color: "red"}}>Error page</h1>
    </div>
  );
};
