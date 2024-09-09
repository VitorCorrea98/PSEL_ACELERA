import { PrismaAccountRepository } from 
  '../../../repositories/implementations/PrismaAccountRepository';
import { UpdateAccountsUseCase } from './UpdateAccountsUseCase';
import { UpdateAccountsUseController } from './UpdateAccountsUseController';

const prismaAccountRepository = PrismaAccountRepository.start();
const updateAccountsUseCase = new UpdateAccountsUseCase(prismaAccountRepository);

const updateAccountsUseController = new UpdateAccountsUseController(updateAccountsUseCase);

export { updateAccountsUseCase, updateAccountsUseController };