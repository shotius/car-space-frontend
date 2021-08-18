import {
  Button,
  Container,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/app/hook";
import { loginUser } from "redux/features/auth/authSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    btn: {
      marginTop: theme.spacing(1),
    },
  })
);

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.authReducer);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const credentials = {
      username,
      password,
    };
    dispatch(loginUser(credentials));
  };

  return (
    <Container className={classes.root}>
      {error}
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Username"
          label="Username"
          autoFocus
          type="text"
          margin="normal"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          required
          variant="outlined"
          placeholder="Password"
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.btn}
          fullWidth
        >
          Login
        </Button>
      </form>
      <Button>
          <Link to="/home">Home</Link>
      </Button>
    </Container>
  );
};
