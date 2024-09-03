import { IAccountUpdate } from './IAccounts';

export interface readAccounts<T> {
  getAll(): Promise<T[]>;
}

export interface modifyAccounts<T> {
  createAccount(_account: T): Promise<T | null>
  updateAccount(_account: IAccountUpdate, _cpf: string): Promise<T | null>
  deleteAccount(_cpf: string): Promise<T | null>
}