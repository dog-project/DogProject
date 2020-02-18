import { DragDropContext } from "react-beautiful-dnd";
import Landing from "./Landing";
import Tier from "./Tier";
import {
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import { Tiers } from "./Tiers";

const onDragEnd = (res, cols, setCols) => {
  if (!res.destination) return;
  const { source, destination } = res;
  if (source.droppableId !== destination.droppableId) {
    const sourceCol = cols[source.droppableId];
    const destCol = cols[destination.droppableId];
    const sourceItems = [...sourceCol.items];
    const destItems = [...destCol.items];

    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setCols({
      ...cols,
      [source.droppableId]: {
        ...sourceCol,
        items: sourceItems
      },

      [destination.droppableId]: {
        ...destCol,
        items: destItems
      }
    });
  } else {
    const column = cols[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setCols({
      ...cols,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

export default function Rankings(props) {
  const [columns, setColumns] = useState(Tiers);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    if (columns["0"].items.length > 0) {
      setOpen(true);
    } else {
      props.callback(columns);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFinalSubmit = () => {
    props.callback(columns);
  };

  return (
    <>
      <Typography
        variant="h5"
        color="primary"
        style={{ textAlign: "left", paddingTop: "15px", paddingLeft: "15px" }}
      >
        Please rank the candidates from most preferred at the top to least
        preferred at the bottom. You can put multiple candidates in the same
        tier.
      </Typography>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
        style={{
          backgroundColor: "white",
          margin: "8px 0px 8px 0px"
        }}
      >
        <div>
          <Grid container direction="column" spacing={2}>
            {Object.entries(columns)
              .slice(0, 1)
              .map(([id, column]) => {
                return <Landing id={id} items={column} />;
              })}
            <Typography
              variant="body"
              color="primary"
              style={{
                textAlign: "left",
                paddingLeft: "15px"
              }}
            >
              Most Preferred
            </Typography>
            {Object.entries(columns)
              .slice(1)
              .map(([id, column]) => {
                return <Tier id={id} tier={column} key={id} />;
              })}
            <Typography
              variant="body"
              color="primary"
              style={{
                textAlign: "left",
                paddingLeft: "15px"
              }}
            >
              Least Preferred
            </Typography>
          </Grid>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size={"large"}
              style={{ margin: "8px 15px 8px auto" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </DragDropContext>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to move on?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have not ranked all the Candidates. Are you sure you want to
            move on?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFinalSubmit} color="primary" autoFocus>
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
