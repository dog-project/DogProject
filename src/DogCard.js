import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  withStyles,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  card: {
    maxWidth: 325
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
    height: 300
  }
};

class DogCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Team Member"
            className={classes.media}
            src={"/images/dogs/" + this.props.id + ".png"}
            title="Team Member"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{this.props.id}</Typography>
            <p>Wins Against This Dog: {this.props.dog.wins}</p>
            <p>Losses Against This Dog: {this.props.dog.losses}</p>
            <p>Ties Against This Dog: {this.props.dog.ties}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

DogCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DogCard);
