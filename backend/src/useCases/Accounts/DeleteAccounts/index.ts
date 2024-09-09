import { PrismaAccountRepository } from
  '../../../repositories/implementations/PrismaAccountRepository';
import { DeleteAccountsUseCase } from './DeleteAccountsUseCase';
import { DeleteAccountsUseController } from './DeleteAccountsUseController';

const prismaAccountRepository = PrismaAccountRepository.start();
const deleteAccountsUseCase = new DeleteAccountsUseCase(prismaAccountRepository);

const deleteAccountsUseController = new DeleteAccountsUseController(deleteAccountsUseCase);

export { deleteAccountsUseCase, deleteAccountsUseController };
