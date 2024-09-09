import { Account } from '../../../entities/Account';
import { PrismaAccountRepository } from 
  '../../../repositories/implementations/PrismaAccountRepository';

export class FindByCPFAccountUseCase {
  constructor(private accountRespository: PrismaAccountRepository) {}

  public async execute(cpf: Account['cpf']): Promise<Account | string> {
    const fixedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const foundAccount = await this.accountRespository.findByCPF(fixedCPF);
    if (!foundAccount) {
      return 'User not found';
    }

    return foundAccount;
  }
}