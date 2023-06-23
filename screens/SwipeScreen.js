// Importación de las bibliotecas necesarias
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { swipeRight, swipeLeft } from '../actions/swipeActions';
import Card from '../components/Card';

// Pantalla de deslizamiento
function SwipeScreen() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.swipe.currentProfile);

  // Funciones para manejar el deslizamiento a la derecha y a la izquierda
  const handleSwipeRight = () => {
    dispatch(swipeRight(profile.id));
  };
  const handleSwipeLeft = () => {
    dispatch(swipeLeft(profile.id));
  };

  return (
    <View>
      <Card profile={profile} />
      <Button title="Deslizar a la izquierda" onPress={handleSwipeLeft} />
      <Button title="Deslizar a la derecha" onPress={handleSwipeRight} />
    </View>
  );
}

export default SwipeScreen;
