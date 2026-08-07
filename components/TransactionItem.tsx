import { Transaction } from '../types/transaction';

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: number) => void;
}

export default function TransactionItem({ transaction, onDelete }: TransactionItemProps) {
  return (
    <tr>
      <td className="border-b p-2">{transaction.date}</td>
      <td className="border-b p-2">
        {transaction.type === 'income' ? '収入' : '支出'}
      </td>
      <td className="border-b p-2">{transaction.category}</td>
      <td className="border-b p-2">{transaction.title}</td>
      <td className="border-b p-2">{transaction.amount.toLocaleString()}円</td>
      <td className="border-b p-2">
        <button
          onClick={() => onDelete(transaction.id)}
          className="text-red-500 hover:text-red-700"
        >
          削除
        </button>
      </td>
    </tr>
  );
}
