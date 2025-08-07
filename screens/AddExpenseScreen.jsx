// Formularios en react native dependen directamente de un estado para cada dato que deseemos capturar.

import React, { useState } from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import FormInput from '../components/FormInput';

/**
 * AddExpenseScreen
 * Pantalla con formulario para capturar un nuevo gasto.
 *
 * @param {object} navigation - Prop de navegación para volver atrás.
 * @param {function} onAddExpense - Callback para añadir el gasto al estado global.
 */
export default function AddExpenseScreen({ navigation, onAddExpense }) {
  // Estados locales para cada campo del formulario
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  /**
   * handleSubmit
   * Valida campos, construye el objeto gasto y lo envía.
   */
  const handleSubmit = () => {
    // Validación del monto: obligatorio, numérico y > 0
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      Alert.alert('Error', 'Ingresa un monto válido.');
      return;
    }
    // Validación de texto: category y description no deben estar vacíos
    if (!category.trim() || !description.trim()) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    // Construimos el objeto de gasto
    const newExpense = {
      id: Date.now().toString(),       // ID único basado en timestamp
      amount: Number(amount),          // Convertimos a número
      category,                        // Categoría en texto
      description,                     // Descripción del gasto
      date: new Date(),                // Fecha de creación
    };

    // Llamamos al callback para añadir al estado global
    onAddExpense(newExpense);
    // Navegamos de vuelta a la pantalla anterior
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Reutilizamos el componente FormInput para cada campo */}
      <FormInput
        placeholder="Monto"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <FormInput
        placeholder="Categoría"
        value={category}
        onChangeText={setCategory}
      />
      <FormInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      {/* Botón para enviar el formulario */}
      <Button title="Guardar gasto" onPress={handleSubmit} />
    </View>
  );
}

// Estilos locales para AddExpenseScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});


// //pantalla de origen
// navigation.navigate('ExpenseDetail', { id, amount, category, description, date })


// // En la pantalla de destino (ExpenseDetailScreen), puedes acceder a estos parámetros mediante route.params:

// function ExpenseDetailScreen({ route }) {
//   const { id, amount, description, date } = route.params
// }


// ejemplo de personalizacion.
// options={({ route, navigation }) => ({
//   headerTitle: `Gasto #${route.params.id}`,
//   headerRight: () => (
//     <Button
//       title="Eliminar"
//       onPress={() => {
//         // Lógica para eliminar
//         navigation.goBack();
//       }}
//     />
//   ),
// })}
