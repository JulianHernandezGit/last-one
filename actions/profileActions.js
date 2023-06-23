// Importación de las bibliotecas necesarias
import firebase from 'firebase/app';
import 'firebase/profile';

// Acción para obtener el perfil del usuario
export const getProfile = (userId) => {
  return async (dispatch) => {
    try {
      // Obtener el perfil del usuario de Firebase
      const profile = await firebase.firestore().collection('users').doc(userId).get();
      // Despachar la acción de SET_PROFILE
      dispatch({ type: 'SET_PROFILE', payload: profile.data() });
    } catch (error) {
      console.error(error);
    }
  };
};

// Acción para actualizar el perfil del usuario
export const updateProfile = (userId, newProfile) => {
  return async (dispatch) => {
    try {
      // Actualizar el perfil del usuario en Firebase
      await firebase.firestore().collection('users').doc(userId).update(newProfile);
      // Despachar la acción de SET_PROFILE
      dispatch({ type: 'SET_PROFILE', payload: newProfile });
    } catch (error) {
      console.error(error);
    }
  };
};
