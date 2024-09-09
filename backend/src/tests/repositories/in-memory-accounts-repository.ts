import { v4 } from 'uuid';
import { Account } from '../../entities/Account';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';

export class InMemoryAccountsRepository implements IAccountsRepository {
  public items: Account[] = []

  async findMany(): Promise<Account[]> {
    const accounts = this.items;

    return accounts;
  }

  async findByCPF(cpf: string): Promise<Account | null> {
    const account = this.items.find((a) => a.cpf === cpf);

    if (!account) {
      return null;
    }

    return account;
  }

  async create(data: Omit<Account, 'id'>): Promise<Account> {
    const newAccount = { ...data, id: v4() };
    this.items.push(newAccount);

    return newAccount;
  }

  async update(data: Account, cpf: string): Promise<Account> {
    const toUpdateAccount = this.items.find((account) => account.cpf === cpf);
    const updatedAccount = {
      ...toUpdateAccount,
      ...data,
    };

    return updatedAccount;
  }

  async delete(cpf: string): Promise<Account> {
    const deletedAccountArray = this.items.filter((account) => account.cpf === cpf);
    const deletedAccount = deletedAccountArray[0];
    deletedAccount.status = false;

    return deletedAccount;
  }
}