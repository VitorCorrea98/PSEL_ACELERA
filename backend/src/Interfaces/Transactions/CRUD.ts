export interface readTransactions<T> {
  getAll(): Promise<T[]>;
}

export interface modifyTransactions<T> {
  createPayment(cpf: string, value: number, date: Date): Promise<T | null>
}
