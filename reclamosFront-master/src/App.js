

import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Inicio from './components/inicio';
import Login from './components/InicioSesion';
import Registrate from './components/Registrarse';
import Administrador from './components/Administrador/Administrador';
import AdministradorGenerarEdificio from './components/Administrador/Administrador-Edificios';
import AdministradorGenerarUnidades from './components/Administrador/Administrador-Unidades';
import AdministradorGenerarUsuarios from './components/Administrador/Administrador-Usuarios';
import AdministradorGenerarReclamos from './components/Administrador/Administrador-Reclamos';
import Dueños from './components/Dueños/Dueños';
import DueñosPropiedades from './components/Dueños/Dueños-Propiedades';
import DueñosReclamosResueltos from './components/Dueños/Dueños-VerReclamosSolucionados';
import DueñosResolver from './components/Dueños/Dueños-VerReclamosPendientes';
import Inquilinos from './components/Inquilinos/Inquilinos';
import InquilinosGeneradorReclamos from './components/Inquilinos/Inquilinos-GenerarReclamos';
import InquilinosVerPropiedades from './components/Inquilinos/Inquilinos-VerPropiedades';
import InquilinosReclamosGenerados from './components/Inquilinos/Inquilinos-VerReclamos';
import CrearUsuarios from './components/Administrador/Funciones/Usuario/CrearUsuario';
import EliminarUsuarios from './components/Administrador/Funciones/Usuario/EliminarUsuario';
import ModificarUsuarios from './components/Administrador/Funciones/Usuario/ActualizarUsuario';
import MostrarUsuarios from './components/Administrador/Funciones/Usuario/BuscarUsuarios';
import CrearUnidad from './components/Administrador/Funciones/Unidades/CrearUnidad';
import EliminarUnidades from './components/Administrador/Funciones/Unidades/EliminarUnidad';
import ModificarUnidades from './components/Administrador/Funciones/Unidades/ActualizarUnidad';
import MostrarUnidades from './components/Administrador/Funciones/Unidades/BuscarUnidades';
import CrearEdificios from './components/Administrador/Funciones/Edificios/CrearEdificio';
import EliminarEdificios from './components/Administrador/Funciones/Edificios/EliminarEdificio';
import ModificarEdificios from './components/Administrador/Funciones/Edificios/ActualizarEdificio';
import MostrarEdificios from './components/Administrador/Funciones/Edificios/BuscarEdificios';

function App() {
  const [sesionIniciada, setSesionIniciada] = useState(() => localStorage.getItem('mail') != null);

  const cerrarSesion = () => {
    // Perform logout logic (e.g., clear sessionStorage, reset authentication state)
    sessionStorage.removeItem('jwt');
    setSesionIniciada(false);
    // ... Other logout logic
  };

  return (
   
      <>
        <Header sesionIniciada={sesionIniciada} cerrarSesion={cerrarSesion} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Inicio />} />

            <Route path="/iniciar-sesion" element={<Login setSesionIniciada={setSesionIniciada} />} />
            <Route path="/registrate" element={<Registrate />} />

            <Route path="/duenos" element={<Dueños />} />
            <Route path="/dueno-propiedades" element={<DueñosPropiedades />} />
            <Route path="/dueno-reclamos-resueltos" element={<DueñosReclamosResueltos />} />
            <Route path="/dueno-resolver" element={<DueñosResolver />} />

            <Route path="/inquilinos" element={<Inquilinos />} />
            <Route path="/inquilino-generador-reclamos" element={<InquilinosGeneradorReclamos />} />
            <Route path="/inquilino-ver-propiedades" element={<InquilinosVerPropiedades />} />
            <Route path="/inquilino-ver-reclamos" element={<InquilinosReclamosGenerados />} />

            <Route path="/administrador" element={<Administrador />} />
            <Route path="/administrador-usuarios" element={<AdministradorGenerarUsuarios />} />
            <Route path="/administrador-edificios" element={<AdministradorGenerarEdificio />} />
            <Route path="/administrador-unidades" element={<AdministradorGenerarUnidades />} />
            <Route path="/administrador-reclamos" element={<AdministradorGenerarReclamos />} />

            <Route path="/agregar-usuarios" element={<CrearUsuarios />} />
            <Route path="/mostrar-usuarios" element={<MostrarUsuarios />} />
            <Route path="/eliminar-usuarios" element={<EliminarUsuarios />} />
            <Route path="/modificar-usuarios" element={<ModificarUsuarios />} />

            <Route path="/agregar-unidades" element={<CrearUnidad />} />
            <Route path="/mostrar-unidades" element={<MostrarUnidades />} />
            <Route path="/eliminar-unidades" element={<EliminarUnidades />} />
            <Route path="/modificar-unidades" element={<ModificarUnidades />} />

            <Route path="/agregar-edificios" element={<CrearEdificios />} />
            <Route path="/mostrar-edificios" element={<MostrarEdificios />} />
            <Route path="/eliminar-edificios" element={<EliminarEdificios />} />
            <Route path="/modificar-edificios" element={<ModificarEdificios />} />
          </Routes>
        </main>
        <Footer />
      </>
   
  );
}

export default App;