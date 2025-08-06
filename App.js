import React, { useState } from 'react';
// Importamos el contenedor de navegación y el stack navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importamos las pantallas que creamos
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';

// Creamos el stack navigator
const Stack = createStackNavigator();

export default function App() {
  // Estado global de la app: array de gastos
  const [expenses, setExpenses] = useState([]);

  /**
   * handleAddExpense
   * Función para añadir un nuevo gasto al estado.
   * @param {Object} expense - Objeto que representa el gasto.
   */
  const handleAddExpense = (expense) => {
    // Usamos callback de setState para trabajar con el estado anterior
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    // NavigationContainer es el provider que envuelve toda la navegación
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Pantalla Home */}
        <Stack.Screen name="Home" options={{ title: 'Gastos' }}>
          {(props) => (
            // Pasamos las props de navegación y el array de gastos
            <HomeScreen {...props} expenses={expenses} />
          )}
        </Stack.Screen>

        {/* Pantalla AddExpense */}
        <Stack.Screen
          name="AddExpense"
          options={{ title: 'Agregar Gasto' }}
        >
          {(props) => (
            // Pasamos la función handleAddExpense a la pantalla de formulario
            <AddExpenseScreen {...props} onAddExpense={handleAddExpense} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
