import { Request, Response } from 'express';
import { FindByCPFAccountUseCase } from './FindByCPFAccountUseCase';
import { mapHttpStatus } from '../../../Utils/mapStatusHTTP';

export class FindByCPFController {
  constructor(private findByCPFUseCase: FindByCPFAccountUseCase) {}

  public async handle(req: Request, res: Response) {
    const { cpf } = req.body;
    const { status, data } = await this.findByCPFUseCase.execute(cpf);
  
    return res.status(mapHttpStatus(status)).json(data);
  }
}