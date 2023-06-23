// Importación de las bibliotecas necesarias
import firebase from 'firebase/app';
import 'firebase/match';

// Acción para obtener los matches del usuario
export const getMatches = () => {
  return async (dispatch, getState) => {
    try {
      // Obtener el ID del usuario actual
      const userId = getState().auth.userId;
      // Obtener los matches del usuario de Firebase
      const matches = await firebase.firestore().collection('matches').where('users', 'array-contains', userId).get();
      // Despachar la acción de SET_MATCHES
      dispatch({ type: 'SET_MATCHES', payload: matches.docs.map(doc => doc.data()) });
    } catch (error) {
      console.error(error);
    }
  };
};

// Acción para enviar un mensaje
export const sendMessage = (matchId, message) => {
  return async (dispatch, getState) => {
    try {
      // Obtener el ID del usuario actual
      const userId = getState().auth.userId;
      // Agregar el mensaje al match en Firebase
      await firebase.firestore().collection('matches').doc(matchId).update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: userId,
          content: message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }),
      });
      // Despachar la acción de SEND_MESSAGE
      dispatch({ type: 'SEND_MESSAGE', payload: { matchId, message } });
    } catch (error) {
      console.error(error);
    }
  };
};
