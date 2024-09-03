/* eslint-disable max-lines-per-function */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const accounts = await prisma.accounts.upsert({
    update: {},
    where: { email: 'teste@teste.com' },
    create: {
      cpf: '111111111-11',
      email: 'teste@teste.com',
      name: 'User Test',
      password: 'testando',
    },
  });
  console.log({ accounts });
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