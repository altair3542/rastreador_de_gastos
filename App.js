import React, { useState } from 'react';
// Importamos el contenedor de navegación y el stack navigator
import { NavigationContainer } from '@react-navigation/native';

// Importamos los navegadores que creamos
import DrawerNavigator from './navigators/DrawerNavigator'

export default function App() {
  const [expenses, setExpenses] = useState([])

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense])
  }

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <NavigationContainer>
      <DrawerNavigator expenses={expenses} onAddExpense={handleAddExpense} onDelete={handleDeleteExpense} />
    </NavigationContainer>
  )

}
