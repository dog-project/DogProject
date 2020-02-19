import React from "react";
import {Droppable} from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid"
import DraggableCard from "./DraggableCard";

export default class Landing extends React.Component {
    render() {
        const column = this.props.items;
        const id = this.props.id;
        return (
            <Grid container item xs={12}>
                <Droppable droppableId={id} direction="horizontal" style = {{minWidth:'100%'}}>
                    {(provided, snapshot) => {
                        return (
                            <Grid item container 
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver ? 'lightblue' : 'white',
                                    borderRadius: 16,
                                    borderStyle: "solid",
                                    borderColor: "black",
                                    borderWidth: "1px",
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
                    }}
                </Droppable>
            </Grid>
        )
    }
}