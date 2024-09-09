import { Account } from '../../../entities/Account';
import { PrismaAccountRepository } from
  '../../../repositories/implementations/PrismaAccountRepository';
import { CreateAccountDTO } from './CreateAccountDTO';

export class CreateAccountUseCase {
  constructor(private accountRepository: PrismaAccountRepository) {}

  public async execute(data: CreateAccountDTO): Promise<Account | string> {
    try {
      const newAccount = new Account({ ...data, status: true });
      const createdAccount = await this.accountRepository.create(newAccount);
  
      return createdAccount;
    } catch (error: any) {
      return 'ERRO';
    }
  }
}