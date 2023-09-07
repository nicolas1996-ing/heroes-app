/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { types } from "../types/types";
import { AuhtContext } from "./AuhtContext";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  logged: false,
};

// f(x) de inicialización de estado, ayuda a mantener la info una vez el usuario haga login
const init = () => {
  const user = JSON.parse(localStorage.getItem("USER-HERO-APP-REACT"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

  const login = (userName = "") => {
    const userTest = {
      id: "abc123",
      userName,
    };

    const action = {
      type: types.login,
      payload: userTest,
    };

    localStorage.setItem("USER-HERO-APP-REACT", JSON.stringify(userTest));
    dispatch(action);
  };

  const logout = () => {
    // limpiar el localstorage
    localStorage.removeItem("USER-HERO-APP-REACT");
    const action = {
      type: types.logout,
    };
    // actualizar el authReducer
    dispatch(action);
  };

  /* el context es proveeido en el app.jsx que a su vez abarca el sistema de rutas de la app que contiene cada
  una de las paginas que se renderizan */

  // el context provider expone los valores declarados dentro de value={}
  return (
    <AuhtContext.Provider value={{ login, authState, logout }}>
      {children}
    </AuhtContext.Provider>
  );
};
