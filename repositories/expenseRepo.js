// encapsular las consultas de sql, por que la UI no ve consultas o queries.

// crud minimo: listar, insertar, eliminar registros.

import { exec } from '../db/sqlite';

export async function listExpenses() {
  const res = await exec(
   'SELECT id, description, category, amount, date FROM expenses ORDER BY date DESC;'
  )
  return res.rows?.array ?? []
}

export async function insertExpense({ id, description, category, amount, date }) {
  const _id = id ?? Date.now().toString()
  const ts = typeof date === 'number' ? date : new Date(date ?? Date.now()).getTime
  await exec(
    'INSERT INTO expenses (id, description, category, amount, date) VALUES (?,?,?,?,?);', [_id, description, category, amount, ts]
  )
  return { id: _id, description, category, amount, date: ts}
}

export async function deleteExpense(id) {
  await exec('DELETE FROM expenses WHERE id = ?;',[id])
}
