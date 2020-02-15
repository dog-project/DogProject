import {DragDropContext} from "react-beautiful-dnd";
import Landing from "./Landing";
import Tier from "./Tier";
import {Button} from "@material-ui/core";
import React, {useState} from "react";
import {Tiers} from "./Tiers";


const onDragEnd = (res, cols, setCols) => {
    if (!res.destination) return;
    const {source, destination} = res;
    if (source.droppableId !== destination.droppableId) {
        const sourceCol = cols[source.droppableId];
        const destCol = cols[destination.droppableId];
        const sourceItems = [...sourceCol.items];
        const destItems = [...destCol.items];

        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setCols({
            ...cols,
            [source.droppableId]: {
                ...sourceCol,
                items: sourceItems
            },

            [destination.droppableId]: {
                ...destCol,
                items: destItems
            }
        })
    } else {
        const column = cols[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setCols({
            ...cols,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        })

    }
};

export default function Rankings() {
    const [columns, setColumns] = useState(Tiers);

        return (
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}
                             style={{
                                 backgroundColor: 'white',
                                 margin: '10px 0px 0px 0px',
                             }}>
                <div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <div style={{padding: 6}}>
                            {Object.entries(columns).slice(0, 1).map(([id, column]) => {
                                return (<Landing id={id} items={column}/>)
                            })}
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                {Object.entries(columns).slice(1).map(([id, column]) => {
                                    return (
                                        <Tier id={id} tier={column} key={id}/>
                                    )
                                })}
                                <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
                                    <Button variant="contained" color="secondary" size={'large'}
                                            style={{margin: '0px 0px 8px 5px'}}>
                                        Share
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                                        </svg>
                                    </Button>

                                    <Button variant="contained" color="primary" size={'large'}
                                            style={{margin: '0px 0px 8px 5px'}}>
                                        Submit
                                    </Button>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </DragDropContext>
        )

}
