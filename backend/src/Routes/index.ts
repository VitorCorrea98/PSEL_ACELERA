import { Router } from 'express';
import accountRouter from './Account_Routes';
import transactionRouter from './Transaction_Routes';

const router = Router();

router.use('/accounts', accountRouter);
router.use('/transactions', transactionRouter);

export default router;