import IAccounts, { IAccountUpdate } from '../Interfaces/Accounts/IAccounts';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import AccountModel from '../Models/Account_Models';

export default class AccountService {
  public accountModel: AccountModel

  constructor() {
    this.accountModel = new AccountModel();
  }

  public async getAll(): Promise<ServiceResponse<IAccounts[]>> {
    const accounts = await this.accountModel.getAll();
    return { status: 'SUCCESSFUL', data: accounts };
  }

  public async createAccount(account: IAccounts): Promise<ServiceResponse<IAccounts>> {
    const accountCreated = await this.accountModel.createAccount(account);
    if (!accountCreated) {
      return { status: 'INVALID_DATA', data: { message: 'Criação inválida.' } };
    }
    return { status: 'CREATED', data: accountCreated };
  }

  public async updateAccount(account: IAccountUpdate, cpf: string):
  Promise<ServiceResponse<IAccounts>> {
    const updatedAccount = await this.accountModel.updateAccount(account, cpf);
    if (!updatedAccount) {
      return { status: 'INVALID_DATA', data: { message: 'Inválido' } };
    }
    return { status: 'SUCCESSFUL', data: updatedAccount };
  }

  public async deleteAccount(cpf: string): Promise<ServiceResponse<IAccounts>> {
    const deletedAccount = await this.accountModel.deleteAccount(cpf);
    if (!deletedAccount) {
      return { status: 'INVALID_DATA', data: { message: 'Inlvaidado' } };
    }
    return { status: 'SUCCESSFUL', data: deletedAccount };
  }
}