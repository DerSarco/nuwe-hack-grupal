import React from "react";

import { Redirect } from "react-router-dom";
import validateToken from "../functions/authValidation";
import BarraSuperior from '../objects/UserSearch/BarraSuperior';
import { GithubUserProvider } from '../context/githubUserContext';
import CreditCardComponent from '../objects/CreditCard/CreditCardComponent';
import "./styles/CreditCard.css";

const creditCard = (props) => {
  return (
    <div>
      {validateToken.validate.verifyToken() ? (
        <GithubUserProvider>
          <BarraSuperior/>
          <CreditCardComponent/>
        </GithubUserProvider>
        
      ) : (
        <Redirect to="/"/>

      )}
    </div>
  );
};

export default creditCard;