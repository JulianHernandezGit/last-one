// Estado inicial
const initialState = {
    likes: [],
    dislikes: [],
  };
  
  // Reductor de deslizamiento
  const swipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LIKE':
        return {
          ...state,
          likes: [...state.likes, action.payload],
        };
      case 'DISLIKE':
        return {
          ...state,
          dislikes: [...state.dislikes, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default swipeReducer;
  