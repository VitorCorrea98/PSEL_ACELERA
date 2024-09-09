import { Request, Response } from 'express';
import { FindAllTransactionsUseCase } from './FindAllTransactionsUseCase';

export class FindAllTransactionsUseController {
  constructor(private findAllTransactionsUseCase: FindAllTransactionsUseCase) {}

  public async handle(_req: Request, res: Response) {
    const data = await this.findAllTransactionsUseCase.execute();

    return res.status(200).json(data);
  }
}