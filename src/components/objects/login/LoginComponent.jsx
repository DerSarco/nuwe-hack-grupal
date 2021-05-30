import React, { Fragment } from "react";
import "./styles/LoginComponent.css";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import fetchAPI from "../../functions/fetchAPI";
import AlertSnack from "../Snack/AlertSnack";
import { Redirect } from "react-router";

class LoginComponent extends React.Component {
  state = {
    register: false,
    open: false,
    alertMessage: "",
    redirect: null
  };

  componentDidMount() {
    this.setState({
      register: false,
      open: false,
      alertMessage: "",
      redirect: null
    });
  }

  handleChangeLoginForm = (email, password) => {
    this.setState({ register: !this.state.register });
  };

  handleChangeRegisterForm = () => {
    this.setState({ register: !this.state.register });
  };

  handleLogin = async (jwt_login) => {
    let body = {
      token: jwt_login,
    };
    let result = await fetchAPI.API.login(body);
    if (typeof result === "object") {
      this.setState({
        ...this.state,
        alertMessage: `${result.errorStatus}: ${result.errorMsg.error}: `,
        open: true,
      });
      return;
    }
    localStorage.setItem("token", result);
    console.log(localStorage.getItem("token"))

    this.setState({...this.state, redirect: "/userSearch"})
  };
  handleRegister = (jwt_register) => {
    let body = {
      token: jwt_register,
    };
    fetchAPI.API.login(body);
  };

  handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ ...this.state, alertMessage: "", open: false });
  };

  goToPrincipal = () => {
 
  };

  render() {
    if(this.state.redirect){
      return <Redirect to="/userSearch"/>
    }
      return (
        <div className="centerLogin">
          {this.state.open && (
            <AlertSnack
              msg={this.state.alertMessage}
              open={this.state.open}
              handleCloseAlert={this.handleCloseAlert}
            />
          )}
          {this.state.register ? (
            <Fragment>
              <RegisterForm handleRegister={this.handleChangeRegisterForm} />
            </Fragment>
          ) : (
            <Fragment>
              <LoginForm
                handleChangeLoginForm={this.handleChangeLoginForm}
                handleLogin={this.handleLogin}
              />
            </Fragment>
          )}
        </div>
      );
    }
}

export default LoginComponent;
