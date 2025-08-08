// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = expense => {
    setExpenses(prev => [...prev, expense]);
  };
  const handleDeleteExpense = id => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  return (
    <NavigationContainer>
      <DrawerNavigator
        expenses={expenses}
        onAddExpense={handleAddExpense}
        onDeleteExpense={handleDeleteExpense}
      />
    </NavigationContainer>
  );
}
