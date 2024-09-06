import { Request, Response } from 'express';
import TransactionService from '../Services/Transaction_Service';
import { mapHttpStatus } from '../Utils/mapStatusHTTP';

export default class TransactionController {
  public transactionService

  constructor() {
    this.transactionService = new TransactionService();
  }

  public async getAll(_req: Request, res: Response) {
    const { status, data } = await this.transactionService.getAll();
    return res.status(mapHttpStatus(status)).json(data);
  }

  public async createPayment(req: Request, res: Response) {
    const cpf = '123456789-00';
    const { value, date } = req.body;
    console.log({ value, date });
    const { status, data } = await this.transactionService.createPayment(cpf, value, date);
    return res.status(mapHttpStatus(status)).json(data);
  }
}