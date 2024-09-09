import { Account } from '../../../entities/Account';
import { ServiceResponse } from '../../../Interfaces/ServiceResponse';
import { PrismaAccountRepository } from
  '../../../repositories/implementations/PrismaAccountRepository';

export class DeleteAccountsUseCase {
  constructor(private accountsRepository: PrismaAccountRepository) {}

  public async execute(cpf: Account['cpf']): Promise<ServiceResponse<Account>> {
    try {
      const fixedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      const deletedAccount = await this.accountsRepository.delete(fixedCPF);
  
      return { status: 'SUCCESSFUL', data: deletedAccount };
    } catch (error: any) {
      return { 
        status: 'CONFLICT', 
        data: { message: error.mesage || 'Error on deleting the account' }, 
      };
    }
  }
}