import { Account } from '../entities/Account';

export interface IAccountREADER<T> {
  findMany(): Promise<T[]>
  findByCPF(cpf: string): Promise<T | null>
}
export interface IAccountCRUD<T> extends IAccountREADER<T> {
  create(data: Partial<T>): Promise<T>
  update(data: Partial<T>, cpf: string): Promise<T>
  delete(cpf: string): Promise<T>
}

export interface IAccountsRepository extends IAccountCRUD<Account> {}
