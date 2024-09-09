import { Account } from '../../../entities/Account';
import { ServiceResponse } from '../../../Interfaces/ServiceResponse';
import { PrismaAccountRepository } from
  '../../../repositories/implementations/PrismaAccountRepository';
import { CreateAccountDTO } from './CreateAccountDTO';

export class CreateAccountUseCase {
  constructor(private accountRepository: PrismaAccountRepository) {}

  public async execute(data: CreateAccountDTO): Promise<ServiceResponse<Account>> {
    try {
      const newAccount = new Account({ ...data, status: true });
      const createdAccount = await this.accountRepository.create(newAccount);
  
      return { status: 'SUCCESSFUL', data: createdAccount };
    } catch (error: any) {
      return { status: 'INVALID_DATA', data: { message: error.message || 'Invalid data' } };
    }
  }
}