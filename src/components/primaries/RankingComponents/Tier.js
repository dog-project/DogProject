import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import DraggableCard from "./DraggableCard";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'


export default class Tier extends React.Component {
    render() {
        const tier = this.props.tier;
        const id = this.props.id;
        return (

            <Grid item xs={12}>
                <Droppable droppableId={id} direction="horizontal">
                    {(provided, snapshot) => {
                        return (
                            <Grid
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                    borderRadius: 16,
                                    padding: 4,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: "90%",
                                    margin: "auto",
                                    minHeight: "90px"
                                }}>

                                {tier.items.map((item, index) => {
                                    return (
                                        <DraggableCard item={item} index={index} key={index}/>
                                    )
                                })
                                }
                                {provided.placeholder}
                            </Grid>
                        )
                    }}
                </Droppable>
            </Grid>
        )
    }
}