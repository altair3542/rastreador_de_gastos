// src/screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

/**
 * HomeScreen
 * - Muestra la lista de gastos
 * - Permite navegar al detalle de cada gasto
 *
 * @param {object} navigation - para cambiar de pantalla
 * @param {Array} expenses     - array de objetos gasto
 */
export default function HomeScreen({ navigation, expenses }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Expense Tracker</Text>
      <Text style={styles.subtitle}>Lleva el control de tus gastos</Text>

      <Button
        title="Agregar Gasto"
        onPress={() => navigation.navigate('AddExpense')}
      />

      {expenses.length === 0 ? (
        <Text>No hay gastos registrados.</Text>
      ) : (
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate('ExpenseDetail', { ...item })
              }
            >
              <Text style={styles.itemText}>
                {item.description} ({item.category})
              </Text>
              <Text style={styles.amount}>
                ${item.amount.toFixed(2)}
              </Text>
            </TouchableOpacity>
          )}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 16, marginBottom: 15 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemText: { fontSize: 16 },
  amount: { fontSize: 16, fontWeight: 'bold' },
});
