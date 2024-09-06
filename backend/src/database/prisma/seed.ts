/* eslint-disable max-lines-per-function */

import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();
async function main() {
  const accounts = await prisma.accounts.upsert({
    update: {},
    where: { email: 'teste@teste.com' },
    create: {
      cpf: '123456789-00',
      email: 'teste@teste.com',
      name: 'User Test',
      password: 'testando',
    },
  });
  const uuid = randomUUID();
  const transactions = await prisma.transactions.upsert({
    update: {},
    where: { transactionId: uuid },
    create: {
      accountId: '123456789-00',
      date: new Date(),
      transactionId: uuid,
      value: 200,
    },
  });
  console.log({ accounts, transactions });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });