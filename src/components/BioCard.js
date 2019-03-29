import React, { Component } from "react";
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
    objectFit: "cover",
    height: 140
  }
};

class BioCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    const img = this.props.image
    return (
      <Card className={classes.card}>
        
            {/* <CardMedia
              component="img"
              className={classes.media}
              src={require('/public/images/'+this.props.image+'.jpg')}
              title="Team Member"
            /> */}

          <CardContent>
            <p>{this.props.name}</p>
            <p>{this.props.bio}</p>
          </CardContent>
       
      </Card>
    );
  }
}

BioCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BioCard);
