import React from "react";
import {Droppable} from "react-beautiful-dnd";
import Box from "@material-ui/core/Box";
import DraggableCard from "./DraggableCard";

export default class Landing extends React.Component {
    render() {
        const column = this.props.items;
        const id = this.props.id;
        return (
            <Droppable droppableId={id} direction="vertical" style = {{minWidth:'100%'}}>
                {(provided, snapshot) => {
                    return (
                        <Box
                            borderRadius={16}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                borderColor: 'black',
                                width: 185,
                                height: 715,
                                padding: 4,

                            }}>
                            {column.items.map((item, index) => {
                                return (
                                    <DraggableCard item={item} index={index} key={'item'}/>
                                )
                            })
                            }
                            {provided.placeholder}
                        </Box>
                    )
                }
                }
            </Droppable>
        )
    }
}