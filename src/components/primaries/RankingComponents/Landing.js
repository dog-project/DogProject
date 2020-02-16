import React from "react";
import {Droppable} from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid"
import DraggableCard from "./DraggableCard";

export default class Landing extends React.Component {
    render() {
        const column = this.props.items;
        const id = this.props.id;
        return (
            <Grid item xs={12}>
                <Droppable droppableId={id} direction="horizontal" style = {{minWidth:'100%'}}>
                    {(provided, snapshot) => {
                        return (
                            <Grid container 
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver ? 'lightblue' : 'black',
                                    borderRadius: 16,
                                    borderColor: 'black',
                                    padding: 4,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: "90%",
                                    margin: "auto",
                                    minHeight: "90px"
                                }}>
                                {column.items.map((item, index) => {
                                    return (
                                        <DraggableCard item={item} index={index} key={index + 6}/>
                                    )
                                })
                                }
                                {provided.placeholder}
                            </Grid>
                        )
                    }
                    }
                </Droppable>
            </Grid>
            
        )
    }
}