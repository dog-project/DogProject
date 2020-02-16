import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core'
import BasicInfo from './BasicInfo';
import Rankings from './RankingComponents/Rankings'
import Demographics from './Demographics';
import ThankYou from './ThankYou';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
      justifyContent: 'flex-end'
    },
  }));


export default function Voting() {
    const [state, setState] = React.useState({
        page: 1,
        eighteen: false,
        votingState: '',
        eligible: false,
        topCandidate: '',
        tier: {},
        race: '',
        gender: '',
        education: '',
        age: '',
        politicalParty: '',
        submit: false
      });

        useEffect(() => {
            if (state.submit) {
                fetch("https://us-east1-dog-project-234515.cloudfunctions.net/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        state: state.votingState,
                        age_above_18: state.eighteen,
                        eligible: state.eligible,
                        race: state.race,
                        gender: state.gender,
                        education: state.education,
                        age: state.age,
                        party: state.politicalParty,
                        top_candidate: state.topCandidate,
                        tier1: state.tiers["1"].items.map(c => c.content),
                        tier2: state.tiers["2"].items.map(c => c.content),
                        tier3: state.tiers["3"].items.map(c => c.content),
                        tier4: state.tiers["4"].items.map(c => c.content),
                        tier5: state.tiers["5"].items.map(c => c.content),
                        tier6: state.tiers["6"].items.map(c => c.content),
                        unranked: state.tiers["0"].items.map(c => c.content)
                    })
                }).then(function() {
                    setState({...state, page: 4})
                });
            }
        });

    const handleBasicSubmit = ({eighteen, votingState, eligible, topCandidate}) => {
        setState({...state, eighteen: eighteen, votingState, votingState, eligible: eligible, topCandidate: topCandidate, page: 2});
    };

    const handleTierSubmit = tiers => {
        setState({...state, tiers: tiers, page: 3})
    }

    const handleDemographicsSubmit = ({race, gender, education, age, politicalParty}) => {
        setState({...state, race: race, gender: gender, education: education, age: age, politicalParty: politicalParty, submit: true});
    };

    return (
        <>
            {state.page === 1 && (
                <Paper>
                    <BasicInfo callback={handleBasicSubmit} />
                </Paper>
            )} 
            {state.page === 2 && (
                <Paper>
                    <Rankings callback={handleTierSubmit} />
                </Paper>
            )} 
            {state.page === 3 && (
                <Paper>
                    <Demographics callback={handleDemographicsSubmit} />
                </Paper>
            )} 
            {state.page === 4 && (
                <ThankYou></ThankYou>
            )} 
        </>
    )
    
}
