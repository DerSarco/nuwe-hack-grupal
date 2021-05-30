import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/loginForm.css";
import jwt from "jwt-simple";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      display: "flex",
      width: "25ch",
      backgroundColor: "#CEB6B6",
    },
  },
}));

const LoginForm = ({ handleChangeLoginForm, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleButton = () => {
    handleChangeLoginForm();
  };

  const loginUser = () => {
    let user = {
      email,
      password,
    };
    let jwt_login = jwt.encode(user, process.env.REACT_APP_JWT_SECRET);
    handleLogin(jwt_login);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="centeredFields">
        <h1>Login</h1>
        <TextField
          id="outlined-user"
          label="User"
          variant="outlined"
          onChange={(x) => setEmail(x.target.value)}
        />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="Password"
          onChange={(x) => setPassword(x.target.value)}
        />
        <div className="loginButtons">
          <Button
            id="loginform_registerButton"
            variant="contained"
            color="secondary"
            className="buttonRegister"
            onClick={handleButton}
          >
            Register
          </Button>
          <Button
            id="loginform_loginButton"
            variant="contained"
            color="primary"
            onClick={loginUser}
          >Login</Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
