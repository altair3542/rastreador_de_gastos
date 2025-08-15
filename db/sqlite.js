// Utilidad de SQLite y las migraciones que deba generar.

import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase('expenses.db')


export function exec(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          sql,
          params,
          (_, res) => resolve(res),
          (_, err) => { reject(err); return true; }
        );
      },
      err => reject(err)
    );
  });

export async function migrate() {
  // Esquema base
  await exec(`
    CREATE TABLE IF NOT EXISTS expenses (
      id TEXT PRIMARY KEY NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      amount REAL NOT NULL,
      date INTEGER NOT NULL
    );
  `);

  //Indices recomendados
  await exec(`CREATE INDEX IF NOT EXISTS idx_expenses_date ON expenses(date);`)
  await exec(`CREATE INDEX IF NOT EXISTS idx_expenses_category ON expenses(category);`)
  }


}
