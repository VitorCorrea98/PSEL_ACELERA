import { Request, Response } from 'express';
import { CreateAccountUseCase } from './CreateAccountUseCase';

export class CreateAccountUseController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {}

  public async handle(req: Request, res: Response) {
    const DTO = req.body;
    const data = await this.createAccountUseCase.execute(DTO);

    return res.status(200).json(data);
  }
}