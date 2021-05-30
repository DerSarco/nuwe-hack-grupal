import React, { Fragment } from "react";
import "./styles/LoginComponent.css";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import fetchAPI from "../../functions/fetchAPI";
import AlertSnack from "../Snack/AlertSnack";
import { Redirect } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";

class LoginComponent extends React.Component {
  state = {
    register: false,
    open: false,
    alertMessage: "",
    redirect: null,
    loading: false,
    loadingMessage: ""
  };

  componentDidMount() {
    this.setState({
      register: false,
      open: false,
      alertMessage: "",
      redirect: null,
      loading: false,
      loadingMessage: ""
    });
  }

  handleChangeLoginForm = (email, password) => {
    this.setState({ register: !this.state.register });
  };

  handleChangeRegisterForm = () => {
    this.setState({ register: !this.state.register });
  };

  setLoading = (loadingMessage) => {
    this.setState({
      ...this.state,
      loading: !this.state.loading,
      loadingMessage: loadingMessage
    });
  };

  handleLogin = async (jwt_login) => {
    this.setLoading("Loggin in...");
    let body = {
      token: jwt_login,
    };
    let result = await fetchAPI.API.login(body);
    if (typeof result === "object") {
      this.setState({
        ...this.state,
        alertMessage: `${result.errorStatus}: ${result.errorMsg.error} `,
        open: true
      });
      this.setLoading("");
      return;
    }
    localStorage.setItem("token", result);

    this.goToPrincipal("Login Succesful");
  };

  handleRegister = async (jwt_register) => {
    this.setLoading("Registering user...");
    let body = {
      token: jwt_register,
    };
    let result = await fetchAPI.API.register(body);

    if (result.errorStatus !== undefined) {
      this.setState({
        ...this.state,
        alertMessage: `${result.errorStatus}: ${result.errorMsg.error} `,
        open: true,
        loadingMessage: "Registering user..."
      });
      this.setLoading("");
      return;
    }

    localStorage.setItem("token", result.data.token);

    this.goToPrincipal("Register Successful");
  };
  goToPrincipal = (msg) => {
    this.setState({
      ...this.state,
      alertMessage: "msg",
      open: true,
      redirect: "/userSearch",
    });
    this.setLoading();
  }

  handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ ...this.state, alertMessage: "", open: false });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="centerLogin">
          <h1>{this.state.loadingMessage}</h1>
          <CircularProgress />;
        </div>
      );
    }
    if (this.state.redirect) {
      return <Redirect to="/userSearch" />;
    }
    return (
      <div className="centerLogin">
      {this.state.open && (
        <AlertSnack
          msg={this.state.alertMessage}
          open={this.state.open}
          handleCloseAlert={this.state.handleCloseAlert}
        />
      )}
        {this.state.register ? (
          <Fragment>
            <RegisterForm
              handleChangeRegisterForm={this.handleChangeRegisterForm}
              handleRegister={this.handleRegister}
            />
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
