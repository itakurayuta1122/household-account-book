export interface Transaction {
  id: number;
  date: string;
  type: 'income' | 'expense';
  category: string;
  title: string;
  amount: number;
}
