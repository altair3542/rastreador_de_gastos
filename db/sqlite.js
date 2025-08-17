import { db } from './connection';

// Ejecuta SQL dentro de una transacción y retorna una Promise
export function exec(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          sql,
          params,
          (_, res) => resolve(res),
          (_, err) => { reject(err); return true; }
        );
      },
      (err) => reject(err)
    );
  });
}

// Migraciones / esquema
export async function migrate() {
  await exec(`
    CREATE TABLE IF NOT EXISTS expenses (
      id TEXT PRIMARY KEY NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      amount REAL NOT NULL,
      date INTEGER NOT NULL
    );
  `);
  await exec(`CREATE INDEX IF NOT EXISTS idx_expenses_date ON expenses(date);`);
  await exec(`CREATE INDEX IF NOT EXISTS idx_expenses_category ON expenses(category);`);
}
