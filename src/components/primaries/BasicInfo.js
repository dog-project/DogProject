import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
  Button,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    justifyContent: "flex-end"
  }
}));

export default function BasicInfo(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    eighteen: "no",
    votingState: null,
    eligible: "no",
    topCandidate: null,
    stateError: false,
    topError: false
  });

  const [open, setOpen] = React.useState(false);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStateChange = event => {
    if (event.target.value === "") {
      setState({ ...state, votingState: event.target.value, stateError: true });
    } else {
      setState({
        ...state,
        votingState: event.target.value,
        stateError: false
      });
    }
  };

  const handleTopChange = event => {
    if (event.target.value === "") {
      setState({ ...state, topCandidate: event.target.value, topError: true });
    } else {
      setState({ ...state, topCandidate: event.target.value, topError: false });
    }
  };

  const handleSubmit = () => {
    if (state.topCandidate === "" && state.votingState === "") {
      setState({ ...state, topError: true, stateError: true });
    } else if (state.votingState === "") {
      setState({ ...state, stateError: true });
    } else if (state.topCandidate === "") {
      setState({ ...state, topError: true });
    } else if (state.eighteen === "no") {
      setOpen(true);
    } else {
      props.callback(state);
    }
  };
  

  return (
    <Paper>
      <Typography
        variant="h5"
        color="primary"
        style={{ textAlign: "left", paddingTop: "16px", paddingLeft: "8px" }}
      >
        Basic Information
      </Typography>
      <FormGroup>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Are you 18+</FormLabel>
          <RadioGroup
            aria-label="18+"
            name="18+"
            value={state.eighteen}
            onChange={handleChange("eighteen")}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl className={classes.formControl} error={state.stateError}>
          <FormLabel id="votingState-label" component="legend">
            What State do you vote in?
          </FormLabel>
          <Select
            id="votingState"
            value={state.votingState}
            onChange={handleStateChange}
          >
            {States()}
          </Select>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Are you an eligible voter?</FormLabel>
          <RadioGroup
            aria-label="eligible"
            name="eligible"
            value={state.eligible}
            onChange={handleChange("eligible")}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl className={classes.formControl} error={state.topError}>
          <FormLabel id="candidate-label" component="legend">
            If you had to pick one candidate, who would you currently vote for
            in the Democratic primary?
          </FormLabel>
          <Select
            id="candidate"
            value={state.topCandidate}
            onChange={handleTopChange}
          >
            {Candidates()}
          </Select>
        </FormControl>
      </FormGroup>
      <Button
        variant="contained"
        color="primary"
        size={"large"}
        style={{ margin: "0px 0px 8px 5px" }}
        onClick={handleSubmit}
      >
        Next
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You must be 18+ years old to participate"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You must be 18+ years old to participate
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

function Candidates() {
  return [<MenuItem value={""}></MenuItem>].concat(
    shuffle([
      <MenuItem value={"Sanders"}>Sanders</MenuItem>,
      <MenuItem value={"Warren"}>Warren</MenuItem>,
      <MenuItem value={"Biden"}>Biden</MenuItem>,
      <MenuItem value={"Buttigieg"}>Buttigieg</MenuItem>,
      <MenuItem value={"Bloomberg"}>Bloomberg</MenuItem>,
      <MenuItem value={"Klobuchar"}>Klobuchar</MenuItem>,
      <MenuItem value={"Gabbard"}>Gabbard</MenuItem>,
      <MenuItem value={"Steyer"}>Steyer</MenuItem>
    ])
  );
}

var shuffle = function(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

function States() {
  return [
    <MenuItem value={""}></MenuItem>,
    <MenuItem value={"AL"}>AL</MenuItem>,
    <MenuItem value={"AK"}>AK</MenuItem>,
    <MenuItem value={"AZ"}>AZ</MenuItem>,
    <MenuItem value={"AR"}>AR</MenuItem>,
    <MenuItem value={"CA"}>CA</MenuItem>,
    <MenuItem value={"CO"}>CO</MenuItem>,
    <MenuItem value={"CT"}>CT</MenuItem>,
    <MenuItem value={"DE"}>DE</MenuItem>,
    <MenuItem value={"FL"}>FL</MenuItem>,
    <MenuItem value={"GA"}>GA</MenuItem>,
    <MenuItem value={"HI"}>HI</MenuItem>,
    <MenuItem value={"ID"}>ID</MenuItem>,
    <MenuItem value={"IL"}>IL</MenuItem>,
    <MenuItem value={"IN"}>IN</MenuItem>,
    <MenuItem value={"IA"}>IA</MenuItem>,
    <MenuItem value={"KS"}>KS</MenuItem>,
    <MenuItem value={"KY"}>KY</MenuItem>,
    <MenuItem value={"LA"}>LA</MenuItem>,
    <MenuItem value={"ME"}>ME</MenuItem>,
    <MenuItem value={"MD"}>MD</MenuItem>,
    <MenuItem value={"MA"}>MA</MenuItem>,
    <MenuItem value={"MI"}>MI</MenuItem>,
    <MenuItem value={"MN"}>MN</MenuItem>,
    <MenuItem value={"MS"}>MS</MenuItem>,
    <MenuItem value={"MO"}>MO</MenuItem>,
    <MenuItem value={"MT"}>MT</MenuItem>,
    <MenuItem value={"NE"}>NE</MenuItem>,
    <MenuItem value={"NV"}>NV</MenuItem>,
    <MenuItem value={"NH"}>NH</MenuItem>,
    <MenuItem value={"NJ"}>NJ</MenuItem>,
    <MenuItem value={"NM"}>NM</MenuItem>,
    <MenuItem value={"NY"}>NY</MenuItem>,
    <MenuItem value={"NC"}>NC</MenuItem>,
    <MenuItem value={"ND"}>ND</MenuItem>,
    <MenuItem value={"OH"}>OH</MenuItem>,
    <MenuItem value={"OK"}>OK</MenuItem>,
    <MenuItem value={"OR"}>OR</MenuItem>,
    <MenuItem value={"PA"}>PA</MenuItem>,
    <MenuItem value={"RI"}>RI</MenuItem>,
    <MenuItem value={"SC"}>SC</MenuItem>,
    <MenuItem value={"SD"}>SD</MenuItem>,
    <MenuItem value={"TN"}>TN</MenuItem>,
    <MenuItem value={"TX"}>TX</MenuItem>,
    <MenuItem value={"UT"}>UT</MenuItem>,
    <MenuItem value={"VT"}>VT</MenuItem>,
    <MenuItem value={"VA"}>VA</MenuItem>,
    <MenuItem value={"WA"}>WA</MenuItem>,
    <MenuItem value={"WV"}>WV</MenuItem>,
    <MenuItem value={"WI"}>WI</MenuItem>,
    <MenuItem value={"WY"}>WY</MenuItem>
  ];
}
