/*
  Warnings:

  - You are about to alter the column `value` on the `Transactions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `cashback` on the `Transactions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Transactions` MODIFY `value` DOUBLE NOT NULL,
    MODIFY `cashback` DOUBLE NOT NULL DEFAULT 0.00;
