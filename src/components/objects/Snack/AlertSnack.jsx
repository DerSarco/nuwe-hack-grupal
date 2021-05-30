import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

function AlertSnack({ msg, open, handleCloseAlert, severity = "error" }) {
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
      <Alert onClose={handleCloseAlert} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

export default AlertSnack;
