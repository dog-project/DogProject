import React from 'react';
import Rankings from "./RankingComponents/Rankings";
import Paper from "@material-ui/core/Paper";
import Navbar from "../home/Navbar";

export default function RankingPage() {

    return(
        <Paper>
            <Typography
                variant="h5"
                color="primary"
                style={{ textAlign: "center", paddingTop: "15px" }}
            >
                I dont know what the exact wording of the poll question is
            </Typography>
            <Rankings/>
        </Paper>
    )
}