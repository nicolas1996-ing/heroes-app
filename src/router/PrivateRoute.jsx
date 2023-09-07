import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuhtContext } from "../auth";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuhtContext);

  // recordar la ultima ruta navegada
  // cada que se ingresa a alguna vista se guarda el route 
  // cuando el usuario hacen login LoginPage se verifica 
  // si existe un ruta guardada y navega hasta allí 
  // useLocation() hook de react-router-dom
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("remember-last-page-react-heroes-app", lastPath);

  // navegacion hacia rutas protegidas
  return authState.logged ? children : <Navigate to="/login" />;
};
