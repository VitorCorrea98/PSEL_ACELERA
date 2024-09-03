import { NextFunction, Request, Response } from 'express';
import AccountJOI from './AccountJOI';

export default class AccountMiddleware {
  private accountJOI

  constructor() {
    this.accountJOI = new AccountJOI();
  }

  public validateKeys(req: Request, res: Response, next: NextFunction) {
    const account = req.body;
    const error = this.accountJOI.validateKeys(account);
    console.log({ account, error });
    if (error) {
      return res.status(401).json(error.message);
    }
    next();
  }
}