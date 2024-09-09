import { Request, Response, Router } from 'express';
import { findAllTransactionsUseController } from '../useCases/Transactions/FindAllTransactions';
import { createTransactionsUseController } from '../useCases/Transactions/CreateTransactions';
import { generateCashbackTransactionUseController } from 
  '../useCases/Transactions/GenerateCashbackTransactions';

const transactionRouter = Router();

transactionRouter.get('', 
  ((req: Request, res: Response) => findAllTransactionsUseController.handle(req, res)));

transactionRouter.post('', 
  (req: Request, res: Response) => createTransactionsUseController.handle(req, res));

transactionRouter.post('/cashback', (req: Request, res: Response) => 
  generateCashbackTransactionUseController.handle(req, res));

export default transactionRouter;