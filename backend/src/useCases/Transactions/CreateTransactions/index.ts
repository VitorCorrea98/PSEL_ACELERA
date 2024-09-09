import { PrismaTransactionRepository } from 
  '../../../repositories/implementations/PrismaTransactionRepository';
import { CreateTransactionsUseCase } from './CreateTransactionsUseCase';
import { CreateTransactionsUseController } from './CreateTransactionsUseController';

const prismaTransactionRepository = PrismaTransactionRepository.start();
const createTransactionsUseCase = new CreateTransactionsUseCase(prismaTransactionRepository);

const createTransactionsUseController = new CreateTransactionsUseController(
  createTransactionsUseCase,
);

export { createTransactionsUseCase, createTransactionsUseController };