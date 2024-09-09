import { Request, Response } from 'express';
import { CreateAccountUseCase } from './CreateAccountUseCase';
import { mapHttpStatus } from '../../../Utils/mapStatusHTTP';

export class CreateAccountUseController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {}

  public async handle(req: Request, res: Response) {
    const DTO = req.body;
    const { status, data } = await this.createAccountUseCase.execute(DTO);

    return res.status(mapHttpStatus(status)).json(data);
  }
}