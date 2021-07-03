import {State} from "./GlobalState";
import {Actions, ActionTypes} from "./types";
import {Reducer} from "react";

export const reducer: Reducer<State, Actions> = (state, action) => {
    switch (action.type) {
        case ActionTypes.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case ActionTypes.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload , ...state.transactions]
            }
        default:
            return state
    }
}