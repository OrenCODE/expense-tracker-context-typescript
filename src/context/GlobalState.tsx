import React, {createContext, Dispatch, useContext, useReducer} from "react";
import {reducer} from './AppReducer';
import {Actions, Transaction} from "./types";

export type State = {
    transactions: Transaction[];
}

// Initial State
const initialState: State = {
    transactions: []
};

// Create Context
export const GlobalContext = createContext<{
    state: State,
    dispatch: Dispatch<Actions>
}>
({
    state: initialState,
    dispatch: () => null,
});

// Provider component
const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export {GlobalProvider, useGlobalContext}