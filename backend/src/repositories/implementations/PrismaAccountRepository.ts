import { PrismaClient } from '@prisma/client';
import { IAccountsRepository } from '../IAccountsRepository';
import { Account } from '../../entities/Account';
import { UpdateAccountDTO } from '../../useCases/Accounts/UpdateAccounts/UpdateAccountsDTO';

export class PrismaAccountRepository implements IAccountsRepository {
  static isInstance: PrismaAccountRepository
  private constructor(private prisma = new PrismaClient()) {}
  
  static start() {
    if (!PrismaAccountRepository.isInstance) {
      PrismaAccountRepository.isInstance = new PrismaAccountRepository();
      return PrismaAccountRepository.isInstance;
    }
    
    return PrismaAccountRepository.isInstance;
  }
  
  public async findMany(): Promise<Account[]> {
    const accounts = await this.prisma.accounts.findMany({ include: { transactions: true } });
    
    return accounts;
  }
  
  public async findByCPF(cpf: Account['cpf']): Promise<Account | null> {
    const account = await this.prisma.accounts.findUnique({ where: { cpf } });
    
    return account;
  }
  
  public async create(data: Account): Promise<Account> {
    const createdAccount = await this.prisma.accounts.create({ data });
    
    return createdAccount;
  }
  
  public async update(data: UpdateAccountDTO, cpf: Account['cpf']): Promise<Account> {
    console.log({ data, cpf });
    const updatedAccount = await this.prisma.accounts
    .update({ where: { cpf }, data });
    
    return updatedAccount;
  }
  
  public async delete(cpf: Account['cpf']): Promise<Account> {
    const deletedAccount = await this.prisma.accounts
      .update({ where: { cpf }, data: { status: false } });
    
    return deletedAccount;
  }
}