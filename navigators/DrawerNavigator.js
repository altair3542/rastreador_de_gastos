// src/navigators/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ expenses, onAddExpense, onDeleteExpense }) {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        // <-- desactiva el header que dibuja el Drawer
      headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeStack" options={{ title: 'Inicio' }}>
        {props => (
          <HomeStackNavigator
            {...props}
            expenses={expenses}
            onAddExpense={onAddExpense}
            onDeleteExpense={onDeleteExpense}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Configuración' }}
      />
    </Drawer.Navigator>
  );
}
