import { Account } from '../../../entities/Account';
import { ServiceResponse } from '../../../Interfaces/ServiceResponse';
import { IAccountsRepository } from '../../../repositories/IAccountsRepository';

export class FindAllAccountUseCase {
    constructor(private accountRepository: IAccountsRepository) {}
    
    public async execute(): Promise<ServiceResponse<Account[]>> {
      const accounts = await this.accountRepository.findMany();
      
      return { status: 'SUCCESSFUL', data: accounts };
    }
}