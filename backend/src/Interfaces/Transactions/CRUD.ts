export interface readTransactions<T> {
  getAll(): Promise<T[]>;
}

export interface modifyTransactions<T> {
  createPayment(_cpf: string, _value: number, _date: Date): Promise<T | null>
}
