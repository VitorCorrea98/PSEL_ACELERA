/*
  Warnings:

  - The primary key for the `Transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Transactions` DROP PRIMARY KEY,
    MODIFY `transactionId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`transactionId`);
