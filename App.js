// Importación de las bibliotecas necesarias
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AppNavigator from "./navigation/AppNavigator";

// Componente principal de la aplicación
function App() {
  // Envolver la aplicación en el proveedor de Redux para acceder al estado global
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
