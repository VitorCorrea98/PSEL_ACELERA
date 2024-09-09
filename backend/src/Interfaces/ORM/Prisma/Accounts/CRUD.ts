import { IAccounts } from '../../../Accounts/IAccounts';

export interface ICRUDORMAccoutns<T> {
  findMany(): Promise<T[]>
  findByCPF(cpf: string): Promise<T | null>
  create(data: Partial<T>): Promise<T>
  update(data: Partial<T>, cpf: string): Promise<T>
  delete(cpf: string): Promise<T>
}

export interface ORMModelAccounts extends ICRUDORMAccoutns<IAccounts> {}
