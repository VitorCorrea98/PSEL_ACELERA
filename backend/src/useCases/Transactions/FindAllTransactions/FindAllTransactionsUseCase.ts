import { Transaction } from '../../../entities/Transactions';
import { ITransactionRepository } from '../../../repositories/ITransactionsRepository';

export class FindAllTransactionsUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  public async execute(): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.findMany();

    return transactions;
  }
}