import { Transaction } from '../../../entities/Transactions';
import { ITransactionRepository } from '../../../repositories/ITransactionsRepository';
import { GenerateCashbackTransactionsDTO } from './GenerateCashbackTransactionsDTO';

export class GenerateCashbackTransactionsUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  public async execute(data: GenerateCashbackTransactionsDTO): 
    Promise<Transaction> {
    const generatedCashback = await this.transactionRepository.generateCashback(data);

    return generatedCashback;
  }
}