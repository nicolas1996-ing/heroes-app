import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* modulo 1. Rutas publicas */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              {/* rutas hijas */}
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* ============================================================= */}
        {/* carga solo el modulo de HeroesRoutes */}
        {/* modulo 2. Rutas privadas */}
        {/* /* cualquier ruta != login se va a las siguientes rutas */}
        {/* ruta protegida */}

        {/* cuando intenten ingresar a este path, primero pasa
        por el componente PrivataRoute y de acuerdo con las condiciones 
        declaradas permite o no el ingreso */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              {/* rutas hijas */}
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
