import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: "100%",
      
      overflowX: 'auto',
      
      
    },
    table: {
      
    },
  });

let id = 0;
function createData(view, sentence) {
  id += 1;
  return { id, view, sentence };
}

const rows = [
  createData("Realist (Objective)", "... a property that exists in the thing itself"),
  createData("Intersubjective", "... what people agree to be cute"),
  createData("Non-Cognitive (Emotive)", `... whatever makes me say "Aww!"`),
  createData("Subjective", "... in the eye of the beholder")
];

function ViewsTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Conception of Cuteness</TableCell>
            <TableCell align="left">According to this conception, cuteness is...</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.view}
              </TableCell>
              <TableCell align="left">{row.sentence}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ViewsTable.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ViewsTable);