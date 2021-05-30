import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './styles/UserSearchInput.css'

export default function UserSearch({ searchUser }) {
  const [state, setState] = useState({
    user: "",
  });

  const getUser = (e) => {
    setState({ user: e.target.value });
  };

  const handleSubmit = () => {
    searchUser(state.user);
  };
  return (
    <div>
      <form className="centerHeader" noValidate autoComplete="off">
      <h3>Github User Finder</h3>
        <TextField
          id="outlined-basic"
          label="User"
          variant="outlined"
          onChange={getUser}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Search
        </Button>
      </form>
    </div>
  );
}
