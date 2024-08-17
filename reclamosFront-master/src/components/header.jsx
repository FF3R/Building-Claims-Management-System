import React from "react";
import { Link } from "react-router-dom";

const Header = ({ sesionIniciada, cerrarSesion }) => {
  const handleCerrarSesion = () => {
    // Display a confirmation dialog before logging out
    const confirmLogout = window.confirm("¿Seguro que deseas cerrar sesión?");
    if (confirmLogout) {
      cerrarSesion();
    }
  };

  return (
    <header style={{ marginBottom: "1.6rem" }}>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" id="visualizarButton" style={{ marginRight: "8px" }}>
          Inicio
        </Link>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {sesionIniciada ? (
            <>
              <Link
                to="/perfil"
                id="visualizarButton"
                style={{ marginRight: "8px" }}
              >
                Perfil
              </Link>
              <button
                className="border-b p-1 hover:bg-coral hover:text-white transition-all pl-2 rounded-lg text-left"
                onClick={handleCerrarSesion}
                style={{
                  marginLeft: "8px",
                  borderRadius: "0.5rem",
                }}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link
                to="/iniciar-sesion"
                id="visualizarButton"
                style={{
                  marginRight: "8px",
                  borderRadius: "0.5rem",
                }}
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/registrate"
                id="visualizarButton"
                style={{ borderRadius: "0.5rem" }}
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
