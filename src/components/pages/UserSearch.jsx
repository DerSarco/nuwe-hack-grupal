import React from "react";
import SearchForm from "../objects/UserSearch/SearchForm";
import { Redirect } from "react-router-dom";
import validateToken from "../functions/authValidation";
import "./styles/UserSearch.css";

const userSearch = (props) => {
  return (
    <div>
      {validateToken.validate.verifyToken() ? (
        <SearchForm />
      ) : (
        <Redirect to="/"/>

      )}
    </div>
  );
};

export default userSearch;
