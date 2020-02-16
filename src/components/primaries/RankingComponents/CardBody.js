import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
                <CardContent >
                    <Typography gutterBottom variant="body1">
                        {props.item.content}
                    </Typography>
                </CardContent>
        </Card>
    );
}
