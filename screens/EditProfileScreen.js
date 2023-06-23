// Importación de las bibliotecas necesarias
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../actions/profileActions';

// Pantalla de edición de perfil
function EditProfileScreen() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);

  // Función para manejar la actualización del perfil
  const handleUpdateProfile = () => {
    dispatch(updateProfile(profile.id, { name, bio }));
  };

  return (
    <View>
      <Text>Editar perfil</Text>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} />
      <TextInput placeholder="Biografía" value={bio} onChangeText={setBio} />
      <Button title="Actualizar perfil" onPress={handleUpdateProfile} />
    </View>
  );
}

export default EditProfileScreen;
