import { StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen/>
    </>
  )
}
