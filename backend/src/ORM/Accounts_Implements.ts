import { PrismaClient } from '@prisma/client';
import { ORMModelAccounts } from '../Interfaces/ORM/Prisma/Accounts/CRUD';
import { IAccounts, IAccountUpdate } from '../Interfaces/Accounts/IAccounts';

export default class PrismaAccounts implements ORMModelAccounts {
  private prisma = new PrismaClient()
  
  public async findMany(): Promise<IAccounts[]> {
    const accounts = await this.prisma.accounts.findMany({ include: { transactions: true } });
    
    return accounts; 
  }
  
  public async findByCPF(cpf: string): Promise<IAccounts | null> {
    const account = await this.prisma.accounts.findUnique({ where: { cpf } });
    
    return account;
  }
  
  public async create(data: IAccounts): Promise<IAccounts> {
    const createdAccount = await this.prisma.accounts.create({ data });
    
    return createdAccount;
  }
  
  public async update(data: IAccountUpdate, cpf: string): Promise<IAccounts> {
    const updatedAccount = await this.prisma.accounts.update({ where: { cpf }, data });
    
    return updatedAccount;
  }
  
  public async delete(cpf: string): Promise<IAccounts> {
    const deletedAccount = await this.prisma.accounts
      .update({ where: { cpf }, data: { status: false } });
      
    return deletedAccount;
  }
}