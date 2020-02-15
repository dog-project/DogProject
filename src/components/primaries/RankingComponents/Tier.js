import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import DraggableCard from "./DraggableCard";
import Box from '@material-ui/core/Box';


export default class Tier extends React.Component {
    render() {
        const tier = this.props.tier;
        const id = this.props.id;
        return (

            <div style={{margin: 8, display: 'flex', flexDirection: 'column'}}>
                <Droppable droppableId={id} direction="horizontal">
                    {(provided, snapshot) => {
                        return (
                            <Box
                                borderRadius={16}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                    padding: 4,
                                    width: '100%',
                                    minWidth: 800,
                                    minHeight: 100,
                                    display: 'flex',
                                    flexDirection: 'row'

                                }}>

                                {tier.items.map((item, index) => {
                                    return (
                                        <DraggableCard item={item} index={index} key={index}/>
                                    )
                                })
                                }
                                {provided.placeholder}
                            </Box>
                        )
                    }}
                </Droppable>
            </div>
        )
    }
}