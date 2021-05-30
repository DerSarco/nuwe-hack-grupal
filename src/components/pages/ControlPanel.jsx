import React from "react";

import { Redirect } from "react-router-dom";
import BarraSuperior from '../objects/UserSearch/BarraSuperior'
import validateToken from "../functions/authValidation";
import "./styles/UserSearch.css";

const userSearch = (props) => {
  return (
    <div>
      {validateToken.validate.verifyToken() ? (
        <>
        <BarraSuperior/>
        <h1>TEST</h1>
        </>
      ) : (
        <Redirect to="/"/>

      )}
    </div>
  );
};

export default userSearch;
