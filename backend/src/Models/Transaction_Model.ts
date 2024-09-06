import { PrismaClient } from '@prisma/client';
import { ITransactionModel } from '../Interfaces/Transactions/TransactionsModel';
import ITransactions from '../Interfaces/Transactions/ITransactions';

export default class TransactionModel implements ITransactionModel {
  public prisma
  
  constructor() {
    this.prisma = new PrismaClient();
  }
  
  public async getAll(): Promise<ITransactions[]> {
    const transactions = await this.prisma.transactions.findMany({ include: { account: true } });
    
    return transactions;
  }
  
  public async createPayment(cpf: string, value: number, date: Date): 
    Promise<ITransactions | null> {
    try {
      const transaction = await this.prisma.transactions
      .create({ data: { accountId: cpf, value, date } });
      
      return transaction; 
    } catch (error) {
      console.log({ error });
      return null;
    }
  }
}
