/* eslint-disable mocha/no-mocha-arrows */
import { v4 } from 'uuid';
import { InMemoryAccountsRepository } from 
  '../../../tests/repositories/in-memory-accounts-repository';
import { FindAllAccountUseCase } from './FindAllAccountUseCase';

describe('first', () => { 
  it('fefe', async () => {
    const inMemoryAccountsRepository = new InMemoryAccountsRepository();
    
    const sut = new FindAllAccountUseCase(inMemoryAccountsRepository);

    inMemoryAccountsRepository.items.push({
      id: v4(),
      cpf: '12345678900',
      email: 'teste@teste.com',
      name: 'Teste',
      password: 'fefefefe', 
      status: true,
    });

    const response = await sut.execute();
    expect(response.status).toBe('SUCCESSFUL');
    expect(response.data).toHaveLength(1);
  });
});