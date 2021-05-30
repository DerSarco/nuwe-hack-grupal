import React, { Fragment } from "react";
import "./styles/LoginComponent.css";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

class LoginComponent extends React.Component {
  state = {
    register: false
  };

  componentDidMount() {
    this.setState({
      register: false,
    });
  }
  
  handleRegister = () => {
    this.setState({register: !this.state.register})
  }

  render() {
    return (
      <div className="centerLogin">
        {this.state.register ? (
          <Fragment>
            <RegisterForm handleRegister={this.handleRegister}/>
          </Fragment>
        ) : (
          <Fragment>
            <LoginForm handleRegister={this.handleRegister}/>
          </Fragment>
        )}
      </div>
    );
  }
}

export default LoginComponent;
