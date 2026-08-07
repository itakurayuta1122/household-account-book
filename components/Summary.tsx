import { Transaction } from '../types/transaction';

interface SummaryProps {
  transactions: Transaction[];
}

export default function Summary({ transactions }: SummaryProps) {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <section className="p-4 border rounded shadow">
      <h2 className="text-lg font-semibold">集計エリア</h2>
      <div className="flex gap-4">
        <p>収入: {income.toLocaleString()}円</p>
        <p>支出: {expense.toLocaleString()}円</p>
        <p>収支: {balance.toLocaleString()}円</p>
      </div>
    </section>
  );
}
