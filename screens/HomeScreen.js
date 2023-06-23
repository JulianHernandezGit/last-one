// Importación de las bibliotecas necesarias
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

// Pantalla de inicio
function HomeScreen() {
  const dispatch = useDispatch();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la pantalla de inicio!</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} buttonStyle={styles.button} />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2089dc',
  },
});

export default HomeScreen;
