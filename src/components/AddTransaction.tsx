import React, {Fragment, useState} from 'react';
import {useGlobalContext} from "../context/GlobalState";
import {ActionTypes} from "../context/types";

export const AddTransaction = () => {

    const {dispatch} = useGlobalContext();

    const [text, setText] = useState<string>('');
    const [amount, setAmount] = useState<any>(0);

    const addTransaction = (e: any) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }

        dispatch({type: ActionTypes.ADD_TRANSACTION, payload: newTransaction});
    }

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={addTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br/>
                        (negative - expense, positive - income)</label
                    >
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    );
}