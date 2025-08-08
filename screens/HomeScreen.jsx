// src/screens/HomeScreen.js

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

/**
 * @typedef {Object} Expense
 * @property {string} id
 * @property {number} amount
 * @property {string} category
 * @property {string} description
 * @property {Date|string|number} date
 */

/**
 * HomeScreen
 * - Muestra la lista de gastos
 * - Navega al formulario para agregar uno nuevo
 * - Permite abrir el detalle de cada gasto al tocar un ítem
 *
 * @param {object} props
 * @param {import('@react-navigation/native').NavigationProp<any>} props.navigation
 * @param {Expense[]} [props.expenses=[]] - Array de gastos
 */
export default function HomeScreen({ navigation, expenses = [] }) {
  // Formatea el monto con fallback si Intl no está disponible en el runtime
  const formatMoney = (n) => {
    if (typeof n !== 'number') return String(n);
    try {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
      }).format(n);
    } catch {
      return `$${n.toFixed(2)}`;
    }
  };

  // Render de cada fila de gasto. Al tocar, navega a ExpenseDetail con todos los params necesarios
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('ExpenseDetail', { ...item })}
    >
      {/* Descripción y categoría del gasto */}
      <Text style={styles.itemText}>
        {item.description} ({item.category})
      </Text>

      {/* Monto formateado */}
      <Text style={styles.amount}>
        {formatMoney(item.amount)}
      </Text>
    </TouchableOpacity>
  );

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

      {/* Lista / estado vacío */}
      {expenses.length === 0 ? (
        <Text style={styles.noExpenses}>
          No hay gastos registrados.
        </Text>
      ) : (
        <FlatList
          style={styles.list}
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          // Opcional: mejora de performance
          initialNumToRender={10}
          windowSize={11}
          removeClippedSubviews
        />
      )}
    </View>
  );
}

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
    flexShrink: 1,
    paddingRight: 8,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
