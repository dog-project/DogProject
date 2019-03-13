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
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
      maxWidth: 700,
      
    },
    table: {
      maxWidth: 700,
    },
  });

let id = 0;
function createData(view, sentence) {
  id += 1;
  return { id, view, sentence };
}

const rows = [
  createData("Realist", "Sentence A"),
  createData("Inter-Subjectivist", "Sentence B"),
  createData("Non-Cognitivist", "Sentence C"),
  createData("Subjectivist", "Sentence D")
];

function ViewsTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Philosophical View</TableCell>
            <TableCell align="left">Their view on Cuteness</TableCell>

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