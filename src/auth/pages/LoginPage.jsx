import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuhtContext } from "../context";

export const LoginPage = () => {
  // useContext: estado global de la app
  // login: f(x) que proporciona el contexto
  const { login } = useContext(AuhtContext);

  // hook reactRouter
  const navigate = useNavigate();
  const onLogin = () => {
    /*
      uso del login proporcionado por el contexto de la app 
    */

    login("nicolas a.");

    // verificar si hay una ruta memorizada
    const lastPath =
      localStorage.getItem("remember-last-page-react-heroes-app") || "/";

    // navega a:  <Route path="/*" element={<HeroesRoutes />} />
    // replace: true ... no permite regresar a la pagina anterior
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
