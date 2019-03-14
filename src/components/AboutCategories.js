import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: '100%',
    
    display: 'inline-block',
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class AboutCategories extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Opportunity</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Metaphysics
              <br />
              What is cuteness? <br />
              Why use voting? <br />
              Condorcet's Jury Theorem
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Approach</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Social Choice
              <br />
              Condorect's Paradox <br />
              Arrow's Theorem
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Results</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Voting Method
              <br />
              Why Pairwise Comparisons?
              <br />
              Ranked Pairs, Condorcet Count and Elo
              <br />
              <br />
              Governance
              <br />
              Who can submit? What are the regulations?
              <br />
              Who can vote and why?
              <br />
              <br />
              Ethics
              <br />
              Privacy (of voters, of submittors)
              <br />
              Research ethics?
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Impact</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lessons for democratic governance
              <br />
              Settling the cutest dog question
              <br />
              Participate in the voting!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

AboutCategories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutCategories);
