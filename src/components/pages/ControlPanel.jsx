import React from "react";

import { Redirect } from "react-router-dom";
import BarraSuperior from "../objects/UserSearch/BarraSuperior";
import ControlPanelComponent from "../objects/ControlPanel/ControlPanelComponent";
import validateToken from "../functions/authValidation";
import "./styles/UserSearch.css";
import { TeamsProvider } from "../context/teamsContext";

const userSearch = (props) => {
  return (
    <div>
      {validateToken.validate.verifyToken() ? (
        <TeamsProvider>
          <BarraSuperior />
          <ControlPanelComponent />
        </TeamsProvider>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default userSearch;
