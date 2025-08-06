import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';

/**
 * HomeScreen
 * Muestra la lista de gastos y permite navegar al formulario para agregar uno nuevo.
 *
 * @param {object} navigation - Prop de React Navigation para gestionar rutas.
 * @param {Array} expenses - Array de objetos gasto.
 */
export default function HomeScreen({ navigation, expenses }) {
  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.title}>🚀 Expense Tracker</Text>
      <Text style={styles.subtitle}>
        Lleva el control de tus gastos
      </Text>

      {/* Botón para navegar a AddExpenseScreen */}
      <Button
        title="Agregar Gasto"
        onPress={() => navigation.navigate('AddExpense')}
      />

      {/* Si no hay gastos, mostramos un mensaje */}
      {expenses.length === 0 ? (
        <Text style={styles.noExpenses}>
          No hay gastos registrados.
        </Text>
      ) : (
        /* Lista de gastos usando FlatList para mejor performance */
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              {/* Descripción y categoría del gasto */}
              <Text style={styles.itemText}>
                {item.description} ({item.category})
              </Text>
              {/* Monto formateado */}
              <Text style={styles.amount}>
                ${item.amount.toFixed(2)}
              </Text>
            </View>
          )}
          style={styles.list}
        />
      )}
    </View>
  );
}

// Estilos locales para HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 15,
  },
  noExpenses: {
    marginTop: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
  },
  list: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
