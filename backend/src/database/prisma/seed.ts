/* eslint-disable max-lines-per-function */

import { PrismaClient } from '@prisma/client';
import {v4} from 'uuid'

const prisma = new PrismaClient();
async function main() {
  const accounts = await prisma.accounts.upsert({
    update: {},
    where: { email: 'teste@teste.com' },
    create: {
      id: '01',
      cpf: '123.456.789-00',
      email: 'teste@teste.com',
      name: 'User Test',
      password: 'testando',
      status: true,
    },
  });
  const uuid = v4();
  const transactions = await prisma.transactions.upsert({
    update: {},
    where: { transactionId: uuid },
    create: {
      document: '123.456.789-00',
      date: new Date(),
      transactionId: uuid,
      value: 200.99,
      cashback: 252.99,
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