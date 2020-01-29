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
    maxWidth: 345,
    height: 620,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
    height: 300
  }
};

class BioCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Team Member"
            className={classes.media}
            src={"/images/team/" + this.props.image + ".jpg"}
            title="Team Member"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{this.props.name}</Typography>
            <Typography component="p">{this.props.bio}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

BioCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BioCard);
