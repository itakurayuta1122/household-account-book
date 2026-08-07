'use client';

import { useState, useEffect } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Summary from '../components/Summary';
import { Transaction } from '../types/transaction';

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load transactions from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('transactions');
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTransactions(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to load transactions from localStorage:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save transactions to localStorage when they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions, isLoaded]);

  const handleAddTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
    };
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const deleteTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // Prevent rendering content that depends on localStorage until it's loaded to avoid hydration mismatch
  if (!isLoaded) {
    return <main className="max-w-2xl mx-auto p-4 space-y-8">Loading...</main>;
  }

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold">家計簿アプリ</h1>

      {/* 1. 集計エリア */}
      <Summary transactions={transactions} />

      {/* 2. 入力フォーム */}
      <section className="p-4 border rounded shadow">
        <h2 className="text-lg font-semibold">入力フォーム</h2>
        <TransactionForm onAdd={handleAddTransaction} />
      </section>

      {/* 3. 一覧エリア */}
      <section className="p-4 border rounded shadow">
        <h2 className="text-lg font-semibold">一覧エリア</h2>
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </section>
    </main>
  );
}
