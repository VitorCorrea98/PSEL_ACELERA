import { Request, Response } from 'express';
import AccountService from '../Services/Account_Service';
import { mapHttpStatus } from '../Utils/mapStatusHTTP';
import IAccounts from '../Interfaces/Accounts/IAccounts';

export default class AccountController {
  public accountService: AccountService

  constructor() {
    this.accountService = new AccountService();
  }

  public async getAll(_req: Request, res: Response) {
    const { status, data } = await this.accountService.getAll();
    return res.status(mapHttpStatus(status)).json(data);
  }

  public async createAccount(req: Request, res: Response) {
    const account = req.body as IAccounts;
    console.log(account);
    const { status, data } = await this.accountService.createAccount(account);
    return res.status(mapHttpStatus(status)).json(data);
  }

  public async updateAccount(req: Request, res: Response) {
    const account = req.body;
    const cpf = '12345678900';
    const { status, data } = await this.accountService.updateAccount(account, cpf);
    return res.status(mapHttpStatus(status)).json(data);
  }

  public async deleteAccount(_req: Request, res: Response) {
    const cpf = '12345678900';
    const { status, data } = await this.accountService.deleteAccount(cpf);
    return res.status(mapHttpStatus(status)).json(data);
  }
}