import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",

    overflowX: "auto"
  },
  table: {}
});

let id = 0;
function createData(method, description) {
  id += 1;
  return { id, method, description };
}

const rows = [
  createData("Majority Voting", "Description"),
  createData("Ranked Pairs", "Description"),
  createData("Elo Ranking", "Description"),
  createData("Ranked Order", "Description")
];

function VotingMethodsTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Voting Method</TableCell>
            <TableCell align="left">
              Description of Voting Method
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.method}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(VotingMethodsTable);
