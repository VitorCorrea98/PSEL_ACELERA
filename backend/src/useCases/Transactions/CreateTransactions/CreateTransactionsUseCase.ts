import { Transaction } from '../../../entities/Transactions';
import { ITransactionRepository } from '../../../repositories/ITransactionsRepository';
import { CreateTransactionsDTO } from './CreateTransactionsDTO';

export class CreateTransactionsUseCase {
  constructor(private transactionsRepository: ITransactionRepository) {}

  public async execute(data: CreateTransactionsDTO): Promise<Transaction> {
    const newTransaction = new Transaction(data);

    const createdTransaction = await this.transactionsRepository.create(newTransaction);

    return createdTransaction;
  }
}