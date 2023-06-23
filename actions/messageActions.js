// Importación de las bibliotecas necesarias
import firebase from 'firebase/app';
import 'firebase/message';

// Acción para obtener los mensajes de un match
export const getMessages = (matchId) => {
  return async (dispatch) => {
    try {
      // Obtener los mensajes del match de Firebase
      const messages = await firebase
        .firestore()
        .collection("matches")
        .doc(matchId)
        .get()
        .data().messages;
      // Despachar la acción de SET_MESSAGES
      dispatch({ type: "SET_MESSAGES", payload: messages });
    } catch (error) {
      console.error(error);
    }
  };
};

// Acción para enviar un mensaje
export const sendMessage = (matchId, content) => {
  return async (dispatch, getState) => {
    try {
      // Obtener el ID del usuario actual
      const userId = getState().auth.userId;
      // Crear el nuevo mensaje
      const message = {
        sender: userId,
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      // Agregar el mensaje al match en Firebase
      await firebase
        .firestore()
        .collection("matches")
        .doc(matchId)
        .update({
          messages: firebase.firestore.FieldValue.arrayUnion(message),
        });
      // Despachar la acción de SEND_MESSAGE
      dispatch({ type: "SEND_MESSAGE", payload: message });
    } catch (error) {
      console.error(error);
    }
  };
};
