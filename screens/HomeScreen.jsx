import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenidos al Gestor de Gastos.
      </Text>
      <Text style={styles.subtitle}>
        Aqui podras llevar el control de tus gastos
      </Text>
      <Button>gasto semanal</Button>
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
