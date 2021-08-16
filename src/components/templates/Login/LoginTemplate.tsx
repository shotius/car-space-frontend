import { Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core";
import { LoginForm } from "components/organizms/Login";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
  })
);
interface LoginTemplateProps {}

export const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <LoginForm />
    </Container>
  );
};
