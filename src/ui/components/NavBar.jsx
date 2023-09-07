import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuhtContext } from "../../auth/context";

export const Navbar = () => {
  // contexto de la app
  const { authState, logout } = useContext(AuhtContext);

  // hook reactRouter
  const navigate = useNavigate();

  const onLogout = () => {
    // uso de useContext
    logout();
    // replace: evita que el usuario regrese a la pagina anterior
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {/* ruta 1. */}
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          {/* ruta 2. */}
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>
          {/* ruta 3. */}
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/hero"
          >
            Hero
          </NavLink>
          {/* ruta 4. */}
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end align-items-center">
        <ul className="navbar-nav ml-auto d-flex align-items-center gap-2">
          <span className="nav-item nav-linkn text-primary">
            {authState.user?.userName}
          </span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
