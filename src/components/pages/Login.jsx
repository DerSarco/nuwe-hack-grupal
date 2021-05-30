import React from "react";
import {Redirect} from 'react-router-dom'
import LoginComponent from "../objects/login/LoginComponent";
import validateToken from "../functions/authValidation";
import "./styles/UserSearch.css";

const Login = (props) => {
  return (
    <div>
      {validateToken.validate.verifyToken() ? (
        <Redirect to="/userSearch"/>
      ) : (
        <LoginComponent/>
      )}
    </div>
  );
};

export default Login;
