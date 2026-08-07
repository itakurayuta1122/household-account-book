'use client';

import { useState } from 'react';
import { Transaction } from '../types/transaction';

interface TransactionFormProps {
  onAdd: (transaction: Omit<Transaction, 'id'>) => void;
}

export default function TransactionForm({ onAdd }: TransactionFormProps) {
  const [date, setDate] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date || !category || !title || amount <= 0) {
      alert('すべての項目を正しく入力してください');
      return;
    }
    onAdd({ date, type, category, title, amount });
    // Reset form
    setDate('');
    setCategory('');
    setTitle('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-1"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as 'income' | 'expense')}
        className="border p-1"
      >
        <option value="income">収入</option>
        <option value="expense">支出</option>
      </select>
      <input
        type="text"
        placeholder="カテゴリ"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-1"
        required
      />
      <input
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1"
        required
      />
      <input
        type="number"
        placeholder="金額"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-1"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-1 rounded">
        追加
      </button>
    </form>
  );
}
