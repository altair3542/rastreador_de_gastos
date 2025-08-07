// configurar este navegador para gestionar las pantallas gobales de la app.

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStackNavigator from './HomeStackNavigator' // importamos el stack para poderlo anidar con los gastos
import SettingsScreen from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName='HomeStack'>
      {/* Pantalla HomeStack que gestiona los gastos */}
      <Drawer.Screen
        name='HomeStack'
        component={HomeStackNavigator}
        options={{ title: 'Incio' }}
      />
      {/* Pantalla de configuración */}
      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ title: 'Configuracion'}}
      />
    </Drawer.Navigator>
  )
}
