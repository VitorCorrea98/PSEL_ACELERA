import { Request, Response } from 'express';
import AccountService from '../Services/Account_Service';
import { mapHttpStatus } from '../Utils/mapStatusHTTP';
import { IAccounts } from '../Interfaces/Accounts/IAccounts';

export default class AccountController {
  static isInstance: AccountController

  private constructor(private accountService: AccountService = AccountService.create()) {}

  static create() {
    if (!AccountController.isInstance) {
      AccountController.isInstance = new AccountController();
      return AccountController.isInstance;
    }
    return AccountController.isInstance;
  }

  public async getAll(_req: Request, res: Response) {
    try {
      const { status, data } = await this.accountService.getAll();

      return res.status(mapHttpStatus(status)).json(data);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public async createAccount(req: Request, res: Response) {
    try {
      const account = req.body as IAccounts;
  
      const { status, data } = await this.accountService.createAccount(account);
      return res.status(mapHttpStatus(status)).json(data);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public async updateAccount(req: Request, res: Response) {
    try {
      const account = req.body;
      const { cpf } = req.params;
      const { status, data } = await this.accountService.updateAccount(account, cpf);
      
      return res.status(mapHttpStatus(status)).json(data);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public async deleteAccount(req: Request, res: Response) {
    try {
      const { cpf } = req.params;
      const { status, data } = await this.accountService.deleteAccount(cpf);
      
      return res.status(mapHttpStatus(status)).json(data);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}