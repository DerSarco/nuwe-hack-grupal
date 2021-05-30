import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/registerForm.css";
import AlertSnack from "../Snack/AlertSnack";
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

const RegisterForm = ({ handleChangeRegisterForm, handleRegister }) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [open, setOpen] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleButton = () => {
    handleChangeRegisterForm()
  };

  const showAlert = (open, message) => {
    setOpen(open);
    setAlertMessage(message);
  };

  const validateRegisterForm = () => {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      showAlert(true, "Mail not valid");
      return false;
    }
    if (password !== confirmPass) {
      showAlert(true, "Contraseñas no coinciden");
      return false;
    }

    return true;
  };

  const registerUser = () => {
    if (validateRegisterForm()) {
      let user = {
        username,
        email,
        password,
      };
      let jwt_register = jwt.encode(user, process.env.REACT_APP_JWT_SECRET);
      handleRegister(jwt_register);
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
    <form className={classes.root} autoComplete="off">
      {open && (
        <AlertSnack
          msg={alertMessage}
          open={open}
          handleCloseAlert={handleCloseAlert}
        />
      )}
      <div className="centeredFields">
        <h1>Register</h1>
        <TextField
          id="outlined-user"
          label="User"
          variant="outlined"
          onChange={(x) => setUsername(x.target.value)}
        />
        <TextField
          id="outlined-user"
          label="Email"
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
        <TextField
          id="outlined-password"
          label="Confirm Password"
          variant="outlined"
          type="Password"
          onChange={(x) => setConfirmPass(x.target.value)}
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
