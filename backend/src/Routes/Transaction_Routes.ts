import { Request, Response, Router } from 'express';
import TransactionController from '../Controllers/Transaction_Controller';

const transactionRouter = Router();
const transactionController = new TransactionController();

transactionRouter.get('', 
  ((req: Request, res: Response) => transactionController.getAll(req, res)));

transactionRouter.post('', 
  (req: Request, res: Response) => transactionController.createPayment(req, res));

export default transactionRouter;