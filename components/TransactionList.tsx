import { Transaction } from '../types/transaction';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: number) => void;
}

export default function TransactionList({ transactions, onDelete }: TransactionListProps) {
  return (
    <table className="w-full mt-2">
      <thead>
        <tr>
          <th className="text-left border-b p-2">日付</th>
          <th className="text-left border-b p-2">種別</th>
          <th className="text-left border-b p-2">カテゴリ</th>
          <th className="text-left border-b p-2">タイトル</th>
          <th className="text-left border-b p-2">金額</th>
          <th className="text-left border-b p-2">操作</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}
