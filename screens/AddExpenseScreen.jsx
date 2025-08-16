// src/screens/AddExpenseScreen.js
import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import { useExpenses } from '../context/ExpensesContext';

export default function AddExpenseScreen({ navigation }) {
  const { addExpense } = useExpenses();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      Alert.alert('Error', 'Ingresa un monto válido.'); return;
    }
    if (!category.trim() || !description.trim()) {
      Alert.alert('Error', 'Todos los campos son obligatorios.'); return;
    }
    try {
      await addExpense({ description: description.trim(), category: category.trim(), amount: Number(amount), date: Date.now() });
      navigation.goBack();
    } catch {
      Alert.alert('Error', 'No fue posible guardar el gasto.');
    }
  };

  return (
    <View style={styles.container}>
      <FormInput placeholder="Monto" keyboardType="numeric" value={amount} onChangeText={setAmount} />
      <FormInput placeholder="Categoría" value={category} onChangeText={setCategory} />
      <FormInput placeholder="Descripción" value={description} onChangeText={setDescription} />
      <Button title="Guardar gasto" onPress={handleSubmit} />
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex:1, padding:20, backgroundColor:'#fff' } });

