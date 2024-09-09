import { Request, Response } from 'express';
import { FindAllAccountUseCase } from './FindAllAccountUseCase';
import { mapHttpStatus } from '../../../Utils/mapStatusHTTP';

export class FindAllAccountController {
  constructor(private findAllAccountUseCase: FindAllAccountUseCase) {}

  public async handle(_req: Request, res: Response) {
    try {
      const { status, data } = await this.findAllAccountUseCase.execute();
      
      return res.status(mapHttpStatus(status)).json(data);
    } catch (error: any) {
      return res.status(400).json({ message: error.mesage || 'Unexpected error' });
    }
  }
}