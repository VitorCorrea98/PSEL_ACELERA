import { Transaction } from '../entities/Transactions';
import { GenerateCashbackTransactionsDTO } from 
  '../useCases/Transactions/GenerateCashbackTransactions/GenerateCashbackTransactionsDTO';

export interface ITransactionCRUD<T> {
  findMany(): Promise<T[]>;
  create(data: T): Promise<T>
  generateCashback(data: GenerateCashbackTransactionsDTO): Promise<T>
}

export interface ITransactionRepository extends ITransactionCRUD<Transaction> {} 