//En este archivo configuramos el Stack Navigator para gestionar la navegación de las pantallas relacionadas con los gastos (Home, Añadir Gasto, Detalles).


// src/navigators/HomeStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';

/**
 * HomeStackNavigator
 * - Gestiona la navegación de las pantallas de gastos (lista, formulario y detalle).
 */
const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Gastos',
          headerLeft: () => (
            // Botón de menú para abrir el Drawer
            <Button title="☰" onPress={() => navigation.toggleDrawer()} />
          ),
        })}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{
          title: 'Agregar Gasto',
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
      <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseDetailScreen}
        options={({ route, navigation }) => ({
          title: `Gasto #${route.params.id}`,
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            // Botón para eliminar el gasto
            <Button
              title="Eliminar"
              onPress={() => {
                route.params.onDeleteExpense(route.params.id);
                navigation.goBack();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
