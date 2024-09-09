import { IAccountUpdate } from './IAccounts';

export interface ICRUDModelReader<T> {
  getAll(): Promise<T[]>
  getByDocument(cpf: string): Promise<T | null>
}

export interface ICRUDModelCreator<T> {
  createAccount(account: T): Promise<T | null>
}

export interface ICRUDModelUpdater<T> {
  updateAccount(account: IAccountUpdate, cpf: string): Promise<T | null>
}

export interface ICRUDModelDeleter<T> {
  deleteAccount(cpf: string): Promise<T | null>
}

export interface ICRUDModel<T> extends 
  ICRUDModelReader<T>, ICRUDModelCreator<T>, ICRUDModelUpdater<T>, ICRUDModelDeleter<T>{}