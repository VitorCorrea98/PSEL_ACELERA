import { Request, Response } from 'express';
import { CreateTransactionsUseCase } from './CreateTransactionsUseCase';
import { CreateTransactionsDTO } from './CreateTransactionsDTO';

export class CreateTransactionsUseController {
  constructor(private createTransactionsUseCase: CreateTransactionsUseCase) {}

  public async handle(req: Request, res: Response) {
    const DTO = req.body as CreateTransactionsDTO;

    const data = await this.createTransactionsUseCase.execute(DTO);
    return res.status(200).json(data);
  }
}