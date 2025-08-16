// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';
import { ExpensesProvider } from './context/ExpensesContext';

export default function App() {

  return (
      <ExpensesProvider>
        <NavigationContainer>
          <DrawerNavigator/>
        </NavigationContainer>
      </ExpensesProvider>
  );
}
