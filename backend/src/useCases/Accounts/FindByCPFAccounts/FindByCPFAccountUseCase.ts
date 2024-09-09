import { Account } from '../../../entities/Account';
import { ServiceResponse } from '../../../Interfaces/ServiceResponse';
import { PrismaAccountRepository } from 
  '../../../repositories/implementations/PrismaAccountRepository';

export class FindByCPFAccountUseCase {
  constructor(private accountRespository: PrismaAccountRepository) {}

  public async execute(cpf: Account['cpf']): Promise<ServiceResponse<Account>> {
    const fixedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const foundAccount = await this.accountRespository.findByCPF(fixedCPF);
    if (!foundAccount) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    return { status: 'SUCCESSFUL', data: foundAccount };
  }
}