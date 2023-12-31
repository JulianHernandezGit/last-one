// Estado inicial
const initialState = {
    profile: null,
  };
  
  // Reductor de perfil
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROFILE':
        return {
          ...state,
          profile: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  