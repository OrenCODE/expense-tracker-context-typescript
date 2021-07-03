import React, {Fragment} from 'react';
import {useGlobalContext} from "../context/GlobalState";
import {TransactionItem} from "./TransactionItem";

export const TransactionList = () => {

    const {state} = useGlobalContext();

    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                {state.transactions.map(transaction =>
                    <TransactionItem key={transaction.id} transaction={transaction}/>
                )}
            </ul>
        </Fragment>
    );
}