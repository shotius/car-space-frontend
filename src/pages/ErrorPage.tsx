import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

interface ErrorPageProps {}

export const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <Box bg="yellow.100" h="100vh">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
      </ul>
      <Heading textAlign="center">Error page</Heading>
    </Box>
  );
};
