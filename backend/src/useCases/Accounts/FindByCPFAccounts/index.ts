import { PrismaAccountRepository } from
  '../../../repositories/implementations/PrismaAccountRepository';
import { FindByCPFAccountUseCase } from './FindByCPFAccountUseCase';
import { FindByCPFController } from './FindByCPFAccountUseController';

const prismaAccountRepository = PrismaAccountRepository.start();
const findByCPFAccountUseCase = new FindByCPFAccountUseCase(prismaAccountRepository);

const findByCPFController = new FindByCPFController(findByCPFAccountUseCase);

export { findByCPFAccountUseCase, findByCPFController };