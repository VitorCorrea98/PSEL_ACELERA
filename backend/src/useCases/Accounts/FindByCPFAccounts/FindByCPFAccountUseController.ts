import { Request, Response } from 'express';
import { FindByCPFAccountUseCase } from './FindByCPFAccountUseCase';

export class FindByCPFController {
  constructor(private findByCPFUseCase: FindByCPFAccountUseCase) {}

  public async handle(req: Request, res: Response) {
    const { cpf } = req.body;
    const data = await this.findByCPFUseCase.execute(cpf);
  
    return res.status(200).json(data);
  }
}