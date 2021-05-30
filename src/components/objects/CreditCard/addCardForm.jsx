import React, { useState } from "react";
import TextField  from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem  from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import './styles/addCardForm.css';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root, & .MuiSelect-root": {
      margin: theme.spacing(1),
      display: "flex",
      width: "75ch",
      backgroundColor: "#F2CFCE",
    },
  },
}));


const CardForm = ({handleRegisterCard}) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [exp_date, setExpDate] = useState("");
  const [credits, setCredits] = useState("");

  const registerCard = () => {
    let card = {
      name,
      number,
      exp_date,
      credits
    }

    // console.log(card);
    handleRegisterCard(card);
  }

  return (
    <form className={classes.root + " centeredFields"} noValidate autoComplete="off">
      <div className="centeredFields form margin-b">
        <h3>Register Card</h3>
          <div className="margin-b">
          <InputLabel id="demo-simple-select-label">Card Type</InputLabel>
          <Select
            
            id="select-card-type"
            variant="outlined"
            onChange={(x) => setName(x.target.value)}
          >
            <MenuItem value="Visa">Visa</MenuItem>
            <MenuItem value="Master Card">Master Card</MenuItem>
            <MenuItem value="American Express">American Express</MenuItem>
          </Select>
          </div>
          <div className="margin-b">
        <InputLabel id="demo-simple-select-label">Card Number</InputLabel>
        <TextField
          id="outlined-number"
          variant="outlined"
          type="Text"
          onChange={(x) => setNumber(x.target.value)}
        />
        </div>
        <div className="margin-b">
        <InputLabel id="demo-simple-select-label">Expiration Date</InputLabel>
         <TextField
          id="outlined-expiration-date"
          variant="outlined"
          type="Date"
          onChange={(x) => setExpDate(x.target.value)}
        />
        </div>
        <div className="margin-b">
        <InputLabel id="demo-simple-select-label">Number of Credits</InputLabel>
         <TextField
          id="outlined-password"
          variant="outlined"
          type="Number"
          onChange={(x) => setCredits(x.target.value)}
        />
        </div>
        <div className="loginButtons">
          <Button
            id="loginform_registerButton"
            variant="contained"
            color="secondary"
            className="buttonRegister"
            onClick={registerCard}
          >
            Register Card
          </Button>
          
        </div>
      </div>
    </form>
  )
}

export default CardForm;