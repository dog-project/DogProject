import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

function BioCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component={props.image}
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          {props.name}
          {props.bio}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



export default withStyles(styles)(BioCard);
