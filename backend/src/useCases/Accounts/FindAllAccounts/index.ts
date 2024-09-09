import { PrismaAccountRepository } 
  from '../../../repositories/implementations/PrismaAccountRepository';
import { FindAllAccountUseCase } from './FindAllAccountUseCase';
import { FindAllAccountController } from './FindAllAccountUseController';

const prismaAccountRepository = PrismaAccountRepository.start();

const findAllAccountUseCase = new FindAllAccountUseCase(prismaAccountRepository);

const findAllAccountController = new FindAllAccountController(findAllAccountUseCase);

export { findAllAccountUseCase, findAllAccountController };
