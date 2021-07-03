export type Transaction = {
    id: number,
    text: string,
    amount: number
}

export enum ActionTypes  {
    DELETE_TRANSACTION = 'DELETE_TRANSACTION',
    ADD_TRANSACTION = 'ADD_TRANSACTION'
}

interface IDeleteTransaction {
    type: ActionTypes.DELETE_TRANSACTION,
    payload: number
}

interface IAddTransaction {
    type: ActionTypes.ADD_TRANSACTION,
    payload: Transaction
}

export type Actions = IDeleteTransaction | IAddTransaction;