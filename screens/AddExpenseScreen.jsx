// Formularios en react native dependen directamente de un estado para cada dato que deseemos capturar.

import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

export default function AddExpenseScreen({ navigation }) {

    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
      if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
        Alert.alert('Error', 'Ingresa un monto valido')
        return;
      }
      if (!category.trim() || !description.trim()) {
        Alert.alert('Error', 'Todos los campos son obligatorios')
        return;
      }
      // Si pasa las validaciones:
      const newEspense = {
        id: Date.now().toString(),
        amount: Number(amount),
        category,
        description,
        date: new Date()
      }
    }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Monto'
        keyboardType='numeric'
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder='Categoria'
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder='Descripción'
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Guardar gasto" onPress={handleSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, padding:20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  }
})
