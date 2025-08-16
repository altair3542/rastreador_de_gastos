// src/navigators/HomeStackNavigator.js
import React from 'react';
import { Button, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';
import { useExpenses } from '../context/ExpensesContext';

const Stack = createStackNavigator();

export default function HomeStackNavigator({ navigation }) {
  const { removeExpense } = useExpenses();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Gastos', headerLeft: () => <Button title="☰" onPress={() => navigation.toggleDrawer()} /> }}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{ title: 'Agregar Gasto', headerLeft: () => <Button title="☰" onPress={() => navigation.toggleDrawer()} /> }}
      />
      <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseDetailScreen}
        options={({ route }) => ({
          title: `Gasto #${route.params.id}`,
          headerLeft: () => <Button title="☰" onPress={() => navigation.toggleDrawer()} />,
          headerRight: () => (
            <Button
              title="Eliminar"
              onPress={() => {
                Alert.alert('Eliminar gasto','¿Seguro que deseas eliminar este gasto?',[
                  { text:'Cancelar', style:'cancel' },
                  { text:'Eliminar', style:'destructive', onPress: async () => { await removeExpense(route.params.id); navigation.goBack(); } }
                ]);
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

