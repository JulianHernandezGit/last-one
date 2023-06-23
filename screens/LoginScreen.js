// Importación de las bibliotecas necesarias
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';

// Pantalla de inicio de sesión
function LoginScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    dispatch(login(email, password));
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Correo electrónico" value={email} onChangeText={setEmail} containerStyle={styles.input} />
      <Input placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry containerStyle={styles.input} />
      <Button title="Iniciar sesión" onPress={handleLogin} buttonStyle={styles.button} />
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
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2089dc',
  },
});

export default LoginScreen;
