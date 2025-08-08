import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * ExpenseDetailScreen
 * Muestra el detalle de un gasto.
 *
 * Recibe vía route.params:
 *  - id: string
 *  - amount: number
 *  - category: string
 *  - description: string
 *  - date: string | number | Date
 */
export default function ExpenseDetailScreen({ route }) {
  // Tomamos los datos que mandamos desde HomeScreen (navigation.navigate('ExpenseDetail', { ...item }))
  const { id, amount, category, description, date } = route.params;

  // Helpers simples para formato
  const formatMoney = (n) => {
    if (typeof n !== 'number') return String(n);
    return `$${n.toFixed(2)}`;
  };

  const formatDateTime = (d) => {
    try {
      return new Date(d).toLocaleString();
    } catch {
      return String(d);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del gasto</Text>

      <InfoRow label="ID" value={id} />
      <InfoRow label="Monto" value={formatMoney(amount)} />
      <InfoRow label="Categoría" value={category} />
      <InfoRow label="Descripción" value={description} />
      <InfoRow label="Fecha" value={formatDateTime(date)} />

      {/* Si más adelante quieres acciones aquí (editar/eliminar),
          puedes pasarlas por props o route.params y renderizarlas aquí. */}
    </View>
  );
}

/**
 * Componente pequeño para filas de información (etiqueta + valor)
 */
function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{String(value)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  row: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: { fontSize: 12, color: '#666', marginBottom: 4 },
  value: { fontSize: 16, color: '#111' },
});
