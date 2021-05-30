import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

function AlertSnack({ msg, open, handleCloseAlert }) {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const vertical = "top";
  const horizontal = "center";
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={2000}
      onClose={handleCloseAlert}
      key={vertical + horizontal}
    >
      <Alert onClose={handleCloseAlert} severity="error">
        {msg}
      </Alert>
    </Snackbar>
  );
}

export default AlertSnack;
