import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/loginForm.css";

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

const LoginForm = ({ handleRegister }) => {
  const classes = useStyles();

  const handleButton = () => {
    handleRegister();
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="centeredFields">
        <h1>Login</h1>
        <TextField id="outlined-user" label="User" variant="outlined" />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="Password"
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
            <Button id="loginform_loginButton" variant="contained" color="primary">
              <Link to="/userSearch" className="LinkNoDeco">
                Login
              </Link>
            </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;