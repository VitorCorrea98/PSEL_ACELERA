import { PrismaClient } from '@prisma/client';
import { IAccountModel } from '../Interfaces/Accounts/AccountsModel';
import IAccounts, { IAccountUpdate } from '../Interfaces/Accounts/IAccounts';

export default class AccountModel implements IAccountModel {
  public prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAll(): Promise<IAccounts[]> {
    const accounts = await this.prisma.accounts.findMany();
    return accounts;
  }

  public async createAccount(_account: IAccounts): Promise<IAccounts | null> {
    try {
      const createdAccount = await this.prisma.accounts.create({
        data: _account,
      });
      return createdAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }

  public async updateAccount(_account: IAccountUpdate, _cpf: string): Promise<IAccounts | null> {
    try {
      const updatedAccount = await this.prisma
        .accounts.update({ where: { cpf: _cpf }, data: _account });
      return updatedAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }

  public async deleteAccount(_cpf: string): Promise<IAccounts | null> {
    try {
      const deletedAccount = await this.prisma.accounts
        .update({ where: { cpf: _cpf }, data: { status: false } });
      return deletedAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }
}