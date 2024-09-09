-- AlterTable
ALTER TABLE `Transactions` MODIFY `value` DECIMAL(65, 30) NOT NULL,
    MODIFY `cashback` DECIMAL(65, 30) NOT NULL;
