import React, { useState, useContext } from "react";
import { Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { TeamsContext } from "../../context/teamsContext";
import { useForm } from "react-hook-form";
import TransferList from "./MembersList";
import authValidation from "../../functions/authValidation";
import AlertSnack from "../Snack/AlertSnack";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
    grow: {
      flexGrow: 1,
    },
  },
}));

const AddTeamForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [users, controller] = useContext(TeamsContext);
  const [state, setState] = useState({
    name: "",
    description: "",
    usersSelected: [],
    open: false,
    alertMessage: "",
    severity: "error",
  });

  const classes = useStyles();
  const getUsers = () => {
    let token = authValidation.validate.returnTokenForReq();
    controller.getUsers(token);
  };

  const cleanState = () => {
    setState((prevState) => {
      return {
        ...prevState,
        name: "",
        description: "",
        usersSelected: [],
        open: false,
        alertMessage: "",
        severity: "",
      };
    });
  }

  const getChecked = (users) => {
    setState((prevState) => {
      return {
        ...prevState,
        usersSelected: users,
      };
    });
  };

  const addTeam = async (dataForm) => {
    const { name, description } = dataForm;
    if (!name || !description || state.usersSelected.length === 0) {
      sendAlert("Pleases fill all the fields");
    }
    console.log(name, description);
    setState((prevState) => {
      return {
        ...prevState,
        subbmitting: true,
      };
    });

    let body = {
      name,
      description,
      users: [],
    };
    state.usersSelected.map((x) => body.users.push(x._id));
    let resp = await controller.addTeam(body);
    if (resp.status === 200) {
      sendAlert("Team succesfuly added", "success");
      cleanState();
    }
  };

  const sendAlert = (msg, severity) => {
    setState((prevState) => {
      return {
        ...prevState,
        open: true,
        alertMessage: msg,
        severity,
      };
    });
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState((prevState) => {
      return {
        ...prevState,
        open: false,
        alertMessage: "",
      };
    });
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit(addTeam)}>
      {state.open && (
        <AlertSnack
          msg={state.alertMessage}
          open={state.open}
          handleCloseAlert={handleCloseAlert}
          severity={state.severity}
        />
      )}
      <Grid container flexDirection="column" spacing={4}>
        <Grid item xs={12}>
          <TextField
            error={errors ? true : false}
            id="outlined-error-helper-text"
            label="Team Name"
            helperText={errors?.text}
            inputProps={{ ...register("name"), "aria-label": "team-name" }}
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={errors ? true : false}
            id="outlined-error-helper-text"
            label="Team Description"
            helperText={errors?.text}
            inputProps={{
              ...register("description"),
              "aria-label": "team-description",
            }}
            variant="outlined"
            color="secondary"
          />
        </Grid>
        {users.length !== 0 ? (
          <TransferList getChecked={getChecked} />
        ) : (
          getUsers()
        )}
        <Grid item xs={12}>
          <Button
            id="loginform_loginButton"
            variant="contained"
            color="primary"
            type="submit"
          >
            Add Team
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTeamForm;
