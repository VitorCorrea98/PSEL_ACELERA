import { Account } from '../../../entities/Account';
import { PrismaAccountRepository } from
  '../../../repositories/implementations/PrismaAccountRepository';
import { UpdateAccountDTO } from './UpdateAccountsDTO';

export class UpdateAccountsUseCase {
  constructor(private accountsRepository: PrismaAccountRepository) {}

  public async execute(
    data: UpdateAccountDTO, 
    cpf: Account['cpf'],
): Promise<Account> {
    const fixedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const updatedAccount = await this.accountsRepository.update(data, fixedCPF);
  
    return updatedAccount;
  }
}