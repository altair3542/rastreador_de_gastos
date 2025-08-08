// src/navigators/HomeStackNavigator.js
import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen'; // si aún no existe, comenta esta línea y el <Stack.Screen> correspondiente

const Stack = createStackNavigator();

export default function HomeStackNavigator({ expenses, onAddExpense, onDeleteExpense }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* HOME */}
      <Stack.Screen
        name="Home"
        options={({ navigation }) => ({
          title: 'Gastos',
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.toggleDrawer()} />
          ),
        })}
      >
        {props => <HomeScreen {...props} expenses={expenses} />}
      </Stack.Screen>

      {/* ADD EXPENSE */}
      <Stack.Screen
        name="AddExpense"
        options={({ navigation }) => ({
          title: 'Agregar Gasto',
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.toggleDrawer()} />
          ),
        })}
      >
        {props => <AddExpenseScreen {...props} onAddExpense={onAddExpense} />}
      </Stack.Screen>

      {/* EXPENSE DETAIL (opcional si ya lo tienes) */}
      <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseDetailScreen}
        options={({ route, navigation }) => ({
          title: route?.params?.id ? `Gasto #${route.params.id}` : 'Detalle',
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.toggleDrawer()} />
          ),
          // Solo pinta el botón "Eliminar" si viene la función en params
          ...(route?.params?.onDeleteExpense && {
            headerRight: () => (
              <Button
                title="Eliminar"
                onPress={() => {
                  route.params.onDeleteExpense(route.params.id);
                  navigation.goBack();
                }}
              />
            ),
          }),
        })}
      />
    </Stack.Navigator>
  );
}
