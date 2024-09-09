import { PrismaClient } from '@prisma/client';
import { ITransactionRepository } from '../ITransactionsRepository';
import { Transaction } from '../../entities/Transactions';
import { GenerateCashbackTransactionsDTO } from 
  '../../useCases/Transactions/GenerateCashbackTransactions/GenerateCashbackTransactionsDTO';

export class PrismaTransactionRepository implements ITransactionRepository {
  static isInstance: PrismaTransactionRepository
  private constructor(private prisma = new PrismaClient()) {}
  
  static start() {
    if (!PrismaTransactionRepository.isInstance) {
      PrismaTransactionRepository.isInstance = new PrismaTransactionRepository();
      return PrismaTransactionRepository.isInstance;
    }
    
    return PrismaTransactionRepository.isInstance;
  }

  public async findMany(): Promise<Transaction[]> {
    const transactions = await this.prisma.transactions.findMany();

    return transactions;
  }

  public async create(data: Transaction): Promise<Transaction> {
    const createdTransaction = await this.prisma.transactions.create({ data });

    return createdTransaction;
  }

  public async generateCashback(data: GenerateCashbackTransactionsDTO): Promise<Transaction> {
    const cashbackGenerated = await this.prisma.transactions
    .update({ where: { transactionId: data.transactionId }, data: { cashback: data.cashback } });

    return cashbackGenerated;
  }
}