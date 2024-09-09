import { Account } from '../entities/Account';
import { CreateAccountDTO } from '../useCases/Accounts/CreateAccounts/CreateAccountDTO';
import { UpdateAccountDTO } from '../useCases/Accounts/UpdateAccounts/UpdateAccountsDTO';

export interface IAccountREADER<T> {
  findMany(): Promise<T[]>
  findByCPF(cpf: string): Promise<T | null>
}
export interface IAccountCRUD<T> extends IAccountREADER<T> {
  create(data: CreateAccountDTO): Promise<T>
  update(data: UpdateAccountDTO, cpf: string): Promise<T>
  delete(cpf: string): Promise<T>
}

export interface IAccountsRepository extends IAccountCRUD<Account> {}
