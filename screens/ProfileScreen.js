// Importación de las bibliotecas necesarias
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';

// Pantalla de perfil
function ProfileScreen() {
  const profile = useSelector(state => state.profile.profile);

  return (
    <View>
      <Text>{profile.name}</Text>
      <Text>{profile.bio}</Text>
      <Button title="Editar perfil" onPress={() => { /* Navegar a la pantalla de edición de perfil */ }} />
    </View>
  );
}

export default ProfileScreen;
