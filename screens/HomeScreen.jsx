// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useExpenses } from '../context/ExpensesContext';

export default function HomeScreen({ navigation }) {
  const { expenses, loading } = useExpenses();

  const formatMoney = n => {
    if (typeof n !== 'number') return String(n);
    try { return new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n); }
    catch { return `$${n.toFixed(2)}`; }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ExpenseDetail', { ...item })}>
      <Text style={styles.itemText}>{item.description} ({item.category})</Text>
      <Text style={styles.amount}>{formatMoney(item.amount)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Expense Tracker</Text>
      <Text style={styles.subtitle}>Lleva el control de tus gastos</Text>
      <Button title="Agregar Gasto" onPress={() => navigation.navigate('AddExpense')} />

      {loading ? (
        <Text style={styles.noExpenses}>Cargando...</Text>
      ) : expenses.length === 0 ? (
        <Text style={styles.noExpenses}>No hay gastos registrados.</Text>
      ) : (
        <FlatList data={expenses} keyExtractor={i => i.id} renderItem={renderItem} style={styles.list} />
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
