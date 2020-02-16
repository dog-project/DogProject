import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography, FormGroup, FormControl, Button, Select, MenuItem, FormLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
      justifyContent: 'flex-end'
    },
  }));

export default function Demographics(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        race: '',
        gender: '',
        education: '',
        age: '',
        politicalParty: '',
      });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = () => {
        if (state.topCandidate === '') {
            setState({...state, topError: true});
        }
        if (state.votingState === '') {
            setState({...state, stateError: true});
        } else {
            props.callback(state);
        }
    }

    return (
        <Paper>
            <Typography
                variant="h5"
                color="primary"
                style={{textAlign: "left", paddingTop: "15px", paddingLeft: "15px"}}
            >
                Demographic Information (optional)
            </Typography>
            <Button variant="contained" color="primary" size={'large'}
                    style={{margin: '0px 0px 8px 5px'}} onClick={handleSubmit}>
                Submit
            </Button>
            <FormGroup >
                <FormControl className={classes.formControl} error={state.error}>
                    <FormLabel id="race-label" component="legend">With which group do you most self-identify</FormLabel>
                    <Select
                        id="race"
                        value={state.race}
                        onChange={handleChange('race')}
                    >
                        {Race()}
                    </Select>
                </FormControl>
            </FormGroup>
            <FormGroup >
                <FormControl className={classes.formControl}>
                    <FormLabel id="race-label" component="legend">With which group do you most self-identify</FormLabel>
                    <Select
                        id="race"
                        value={state.race}
                        onChange={handleChange('race')}
                    >
                        {Race()}
                    </Select>
                </FormControl>
            </FormGroup>
            <FormGroup >
                <FormControl className={classes.formControl}>
                    <FormLabel id="gender-label" component="legend">With which do you most self-identify?</FormLabel>
                    <Select
                        id="gender"
                        value={state.race}
                        onChange={handleChange('gender')}
                    >
                        {Gender()}
                    </Select>
                </FormControl>
            </FormGroup>
            <FormGroup >
                <FormControl className={classes.formControl}>
                    <FormLabel id="education-label" component="legend">Please select the highest level of education which applies to you.</FormLabel>
                    <Select
                        id="education"
                        value={state.education}
                        onChange={handleChange('education')}
                    >
                        {Education()}
                    </Select>
                </FormControl>
            </FormGroup>
            <FormGroup >
                <FormControl className={classes.formControl}>
                    <FormLabel id="age-label" component="legend">Please select the age range into which you fit.</FormLabel>
                    <Select
                        id="age"
                        value={state.age}
                        onChange={handleChange('age')}
                    >
                        {Age()}
                    </Select>
                </FormControl>
            </FormGroup>
            <FormGroup >
                <FormControl className={classes.formControl}>
                    <FormLabel id="politicalParty-label" component="legend">In which political party are you registered?</FormLabel>
                    <Select
                        id="politicalParty"
                        value={state.politicalParty}
                        onChange={handleChange('politicalParty')}
                    >
                        {PoliticalParty()}
                    </Select>
                </FormControl>
            </FormGroup>
        </Paper>
    )
}

function Race() {
    return (
        [
            <MenuItem value={''}></MenuItem>,
            <MenuItem value={'Black'}>Black</MenuItem>,
            <MenuItem value={'White'}>White</MenuItem>,
            <MenuItem value={'Hispanic/Latinx'}>Hispanic/Latinx</MenuItem>,
            <MenuItem value={'Asian'}>Asian</MenuItem>,
            <MenuItem value={'Native Am.'}>Native Am.</MenuItem>,
            <MenuItem value={'Hawaiian/Pacific Isl.'}>Hawaiian/Pacific Isl.</MenuItem>,
            <MenuItem value={'Middle Eastern/North African'}>Middle Eastern/North African</MenuItem>,
            <MenuItem value={'Other/Unknown'}>Other/Unknown</MenuItem>,
            <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>,
        ]
    )
}

function Gender() {
  return (
    [
      <MenuItem value={''}></MenuItem>,
      <MenuItem value={'Man'}>Man</MenuItem>,
      <MenuItem value={'Woman'}>Woman</MenuItem>,
      <MenuItem value={'Nonbinary'}>Nonbinary</MenuItem>,
      <MenuItem value={'Other'}>Other</MenuItem>,
      <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>
    ]
  )
}

function Education() {
  return (
    [
      <MenuItem value={''}></MenuItem>,
      <MenuItem value={'Some high school'}>Some high school</MenuItem>,
      <MenuItem value={'HS diploma/GED'}>HS diploma/GED</MenuItem>,
      <MenuItem value={'Some College'}>Some College</MenuItem>,
      <MenuItem value={'College or Beyond'}>College or Beyond</MenuItem>,
      <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>
    ]
  )
}

function Age() {
  return (
    [
      <MenuItem value={''}></MenuItem>,
      <MenuItem value={'18-24'}>18-24</MenuItem>,
      <MenuItem value={'25-44'}>25-44</MenuItem>,
      <MenuItem value={'45-65'}>45-65</MenuItem>,
      <MenuItem value={'65+'}>65+</MenuItem>,
      <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>
    ]
  )
}


function PoliticalParty() {
  return (
    [
      <MenuItem value={''}></MenuItem>,
      <MenuItem value={'Democrat'}>Democrat</MenuItem>,
      <MenuItem value={'Republican'}>Republican</MenuItem>,
      <MenuItem value={'Independent'}>Independent</MenuItem>,
      <MenuItem value={'Other'}>Other</MenuItem>,
      <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>
    ]
  )
}





