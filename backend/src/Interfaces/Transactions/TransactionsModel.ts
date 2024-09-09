import { modifyTransactions, readTransactions } from './CRUD';
import { ITransactions } from './ITransactions';

export type ITransactionModel = readTransactions<ITransactions> & modifyTransactions<ITransactions>
