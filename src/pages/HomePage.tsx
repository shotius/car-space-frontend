import React from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return <h1>HomePage<Link to="/admin/dashboard/">admin page</Link></h1>;
};
