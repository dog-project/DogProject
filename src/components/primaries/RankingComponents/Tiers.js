import { Candidates } from './Candidates'
import uuid from "uuid/v4";

export const Tiers =  {
    [uuid()] : {
        rank: "landing",
        items: Candidates
    },

    [uuid()]: {
        name: 1,
        items: []
    },

    [uuid()]: {
        name: 2,
        items: []
    },
    [uuid()]: {
        name: 3,
        items: []
    },
    [uuid()]: {
        name: 4,
        items: []
    },
    [uuid()]: {
        name: 5,
        items: []
    },

    [uuid()]: {
        name: 6,
        items: []
    }
};