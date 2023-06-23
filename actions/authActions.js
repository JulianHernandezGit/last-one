// Importación de las bibliotecas necesarias
import firebase from 'firebase/app';
import 'firebase/auth';

// Acción para registrar
export const register = (email, password) => {
  return async (dispatch) => {
    try {
      // Registrar con Firebase
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Despachar la acción de LOGIN
      dispatch({ type: 'LOGIN', payload: user.user.refreshToken });
    } catch (error) {
      console.error(error);
    }
  };
};

// Acción para iniciar sesión
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      // Iniciar sesión con Firebase
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      // Despachar la acción de LOGIN
      dispatch({ type: 'LOGIN', payload: user.user.refreshToken });
    } catch (error) {
      console.error(error);
    }
  };
};

// Acción para cerrar sesión
export const logout = () => {
  return async (dispatch) => {
    try {
      // Cerrar sesión con Firebase
      await firebase.auth().signOut();
      // Despachar la acción de LOGOUT
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error(error);
    }
  };
};
