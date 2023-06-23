// Estado inicial
const initialState = {
    messages: [],
  };
  
  // Reductor de mensajes
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MESSAGES':
        return {
          ...state,
          messages: action.payload,
        };
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default messageReducer;
  