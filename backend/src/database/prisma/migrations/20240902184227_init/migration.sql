-- CreateTable
CREATE TABLE `Accounts` (
    `id` INTEGER NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Accounts_cpf_key`(`cpf`),
    UNIQUE INDEX `Accounts_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transactions` (
    `transactionId` INTEGER NOT NULL,
    `accountId` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `value` INTEGER NOT NULL,
    `cashback` INTEGER NOT NULL,

    PRIMARY KEY (`transactionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Accounts`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;
