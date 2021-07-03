import React from 'react';
import {ActionTypes, Transaction} from "../context/types";
import {useGlobalContext} from "../context/GlobalState";

type Props = {
    transaction: Transaction
};

export const TransactionItem = ({transaction}: Props) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {dispatch} = useGlobalContext()

    const deleteTransaction = (id: number) => {
        dispatch({type: ActionTypes.DELETE_TRANSACTION, payload: id});
    }

    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    );
}