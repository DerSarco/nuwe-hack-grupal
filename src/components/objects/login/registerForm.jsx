import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import "./styles/registerForm.css";

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
  const handleButton = () => {
    handleRegister();
  };
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="centeredFields">
        <h1>Register</h1>
        <TextField id="outlined-user" label="User" variant="outlined" />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="Password"
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
          <Button id="registerform_Register" variant="contained" color="primary">
           <Link to="/userSearch" className='LinkNoDeco'>Register</Link>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
