import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

/**
 * FormInput
 * Componente reutilizable para inputs de formulario.
 *
 * @param {string} placeholder - Texto guía dentro del input.
 * @param {string} value - Valor controlado del input.
 * @param {function} onChangeText - Callback para actualizar el estado padre.
 * @param {('default'|'numeric'|...)} keyboardType - Tipo de teclado (numérico, email, etc.).
 */
export default function FormInput({
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

// Estilos locales para FormInput
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
