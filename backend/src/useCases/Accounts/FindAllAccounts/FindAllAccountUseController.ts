import { Request, Response } from 'express';
import { FindAllAccountUseCase } from './FindAllAccountUseCase';

export class FindAllAccountController {
  constructor(private findAllAccountUseCase: FindAllAccountUseCase) {}

  public async handle(_req: Request, res: Response) {
    try {
      const data = await this.findAllAccountUseCase.execute();
      
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(400).json({ message: error.mesage || 'Unexpected error' });
    }
  }
}