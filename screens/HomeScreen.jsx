import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View {styles.container}>
      <Text styles={styles.title}>
        Bienvenidos al Gestor de Gastos.
      </Text>
      <Text styles={styles.subtitle}>
        Aqui podras llevar el control de tus gastos
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center'
  }
})
