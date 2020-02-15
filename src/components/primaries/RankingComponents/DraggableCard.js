import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import CardBody from "./CardBody";

export default class DraggableCard extends React.Component {

    render() {
        const item = this.props.item;
        const index = this.props.index;
        return (
            <Draggable key = {item.id}
                       draggableId = {item.id}
                       index = {index}>
                {(provided, snapshot)=> {
                    return (
                        <div
                            ref = {provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style = {{
                                userSelect: 'none',
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '10px 10px 10px 10px',
                                ...provided.draggableProps.style
                            }}
                        >
                                <CardBody item={item}/>
                        </div>
                    )
                }
                }
            </Draggable>
        )
    }
}