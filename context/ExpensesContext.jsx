import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { migrate } from '../db/sqlite';
import { listExpenses, insertExpense, deleteExpense } from '../repositories/expenseRepo';

const ExpensesContext = createContext(undefined);

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading]   = useState(true);

  async function reload() {
    const data = await listExpenses();
    setExpenses(data);
  }

  async function addExpense(payload) {
    const inserted = await insertExpense(payload);
    setExpenses(prev => [inserted, ...prev]);  // actualización optimista
    return inserted;
  }

  async function removeExpense(id) {
    await deleteExpense(id);
    setExpenses(prev => prev.filter(e => e.id !== id));
  }

  useEffect(() => {
    (async () => {
      await migrate();
      await reload();
      setLoading(false);
    })();
  }, []);

  const value = useMemo(() => ({
    expenses, loading, addExpense, removeExpense, reload
  }), [expenses, loading]);

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export function useExpenses() {
  const ctx = useContext(ExpensesContext);
  if (!ctx) throw new Error('useExpenses must be used within <ExpensesProvider>');
  return ctx;
}
