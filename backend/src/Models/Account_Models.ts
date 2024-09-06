import { PrismaClient } from '@prisma/client';
import { IAccountModel } from '../Interfaces/Accounts/AccountsModel';
import { IAccounts, IAccountUpdate } from '../Interfaces/Accounts/IAccounts';

export default class AccountModel implements IAccountModel {
  public prisma: PrismaClient
  
  constructor() {
    this.prisma = new PrismaClient();
  }
  
  public async getAll(): Promise<IAccounts[]> {
    const accounts = await this.prisma.accounts.findMany({ include: { transactions: true } });
    
    return accounts;
  }
  
  public async getByDocument(cpf: string): Promise<IAccounts | null> {
    const account = await this.prisma.accounts.findUnique({ where: { cpf } });
    
    if (!account) {
      return null;
    }
    return account; 
  }
  
  public async createAccount(account: IAccounts): Promise<IAccounts | null> {
    try {
      const createdAccount = await this.prisma.accounts.create({
        data: account,
      });
      return createdAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }
  
  public async updateAccount(account: IAccountUpdate, cpf: string): Promise<IAccounts | null> {
    try {
      const updatedAccount = await this.prisma
        .accounts.update({ where: { cpf }, data: account });
      
      return updatedAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }
  
  public async deleteAccount(cpf: string): Promise<IAccounts | null> {
    try {
      const deletedAccount = await this.prisma.accounts
        .update({ where: { cpf }, data: { status: false } });
      
      return deletedAccount;
    } catch (error) {
      console.log({ error });
      return null;
    }
  }
}
