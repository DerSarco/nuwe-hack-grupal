import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/registerForm.css";
import AlertSnack from "../Snack/AlertSnack";

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

const RegisterForm = ({ handleRegister }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [open, setOpen] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleButton = () => {
    handleRegister();
  };

  const showAlert = (open, message) => {
    setOpen(open);
    setAlertMessage(message);
  };

  const validateRegisterForm = () => {
    if (email.length < 6 || email.length > 12) {
      showAlert(true, 'Usuario no valido');
      return false;
    }
    if (password !== confirmPass) {
      showAlert(true, 'Contraseñas no coinciden');
      return false;
    }

    return true;
  };

  const registerUser = () => {
    if (validateRegisterForm) {
      console.log("entre!")
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setAlertMessage("");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div className="centeredFields">
        <h1>Register</h1>
        <TextField id="outlined-user" label="User" variant="outlined" onChange={x => setEmail(x.target.value)}/>
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="Password"
        onChange={x => setPassword(x.target.value)}
        />
        <TextField
          id="outlined-password"
          label="Confirm Password"
          variant="outlined"
          type="Password"
          onChange={x => setConfirmPass(x.target.value)}
        />
      </div>
      <div className="loginButtons">
        <div>
          <Button
            variant="contained"
            color="secondary"
            className="buttonRegister"
            onClick={handleButton}
          >
            Login
          </Button>
        </div>
        <div className="buttonRegister">
          <Button
            id="registerform_Register"
            variant="contained"
            color="primary"
            onClick={registerUser}
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
