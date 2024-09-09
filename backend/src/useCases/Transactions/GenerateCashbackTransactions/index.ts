import { PrismaTransactionRepository } from 
  '../../../repositories/implementations/PrismaTransactionRepository';
import { GenerateCashbackTransactionsUseCase } from './GenerateCashbackTransactionsUseCase';
import { GenerateCashbackTransactionsUseController } from 
  './GenerateCashbackTransactionsUseController';

const prismaTransactionRepository = PrismaTransactionRepository.start();
const generateCashbackTransactionUseCase = new GenerateCashbackTransactionsUseCase(
  prismaTransactionRepository,
);

const generateCashbackTransactionUseController = new GenerateCashbackTransactionsUseController(
  generateCashbackTransactionUseCase,
);

export { generateCashbackTransactionUseCase, generateCashbackTransactionUseController };