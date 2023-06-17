import { turnsTypes } from "../types";

const { ADD_TURN, REMOVE_TURN,FILTER_TURN } = turnsTypes


export const addTurn = (turn) => ({
    type: ADD_TURN,
    item: turn,
});

export const removeTurn = (id) => ({
    type: REMOVE_TURN,
    id,
});

export const filterTurn = (fecha) => ({
    type: FILTER_TURN,
    fecha,
});

