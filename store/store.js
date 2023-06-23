// Importación de las bibliotecas necesarias
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import profileReducer from "../reducers/profileReducer";
import matchesReducer from "../reducers/matchesReducer";

// Combinar todos los reductores en uno
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  matches: matchesReducer,
});

// Crear la tienda Redux
const store = configureStore({ reducer: rootReducer });

export default store;

