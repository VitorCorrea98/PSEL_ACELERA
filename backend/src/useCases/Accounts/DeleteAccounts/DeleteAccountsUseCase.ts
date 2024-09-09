import { Account } from '../../../entities/Account';
import { PrismaAccountRepository } from
  '../../../repositories/implementations/PrismaAccountRepository';

export class DeleteAccountsUseCase {
  constructor(private accountsRepository: PrismaAccountRepository) {}

  public async execute(cpf: Account['cpf']): Promise<Account | string> {
    try {
      const fixedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      const deletedAccount = await this.accountsRepository.delete(fixedCPF);
  
      return deletedAccount;
    } catch (error: any) {
      return 'Error on deleting the account';
    }
  }
}