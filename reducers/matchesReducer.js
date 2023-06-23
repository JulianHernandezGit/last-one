// Estado inicial
const initialState = {
    matches: [],
  };
  
  // Reductor de matches
  const matchesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MATCHES':
        return {
          ...state,
          matches: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default matchesReducer;
  