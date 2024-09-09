import { PrismaTransactionRepository } from 
  '../../../repositories/implementations/PrismaTransactionRepository';
import { FindAllTransactionsUseCase } from './FindAllTransactionsUseCase';
import { FindAllTransactionsUseController } from './FindAllTransactionsUseController';

const prismaTransactionRepository = PrismaTransactionRepository.start();
const findAllTransactionsUseCase = new FindAllTransactionsUseCase(prismaTransactionRepository);

const findAllTransactionsUseController = new FindAllTransactionsUseController(
  findAllTransactionsUseCase,
);

export { findAllTransactionsUseCase, findAllTransactionsUseController };