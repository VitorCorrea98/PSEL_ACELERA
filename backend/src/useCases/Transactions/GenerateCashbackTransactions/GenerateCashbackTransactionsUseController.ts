import { Request, Response } from 'express';
import { GenerateCashbackTransactionsUseCase } from './GenerateCashbackTransactionsUseCase';
import { GenerateCashbackTransactionsDTO } from './GenerateCashbackTransactionsDTO';

export class GenerateCashbackTransactionsUseController {
  constructor(private generateCashbackTransactionUseCase: 
    GenerateCashbackTransactionsUseCase) {}
    
  public async handle(req: Request, res: Response) {
    const DTO = req.body as GenerateCashbackTransactionsDTO;
    
    const data = await this.generateCashbackTransactionUseCase.execute(DTO);
    
    return res.status(200).json(data);
  }
}