import { PrismaAccountRepository }
  from '../../../repositories/implementations/PrismaAccountRepository';
import { CreateAccountUseCase } from './CreateAccountUseCase';
import { CreateAccountUseController } from './CreateAccountUseController';

const prismaAccountRepository = PrismaAccountRepository.start();
const createAccountUseCase = new CreateAccountUseCase(prismaAccountRepository);

const createAccountUseController = new CreateAccountUseController(createAccountUseCase);

export { createAccountUseCase, createAccountUseController };