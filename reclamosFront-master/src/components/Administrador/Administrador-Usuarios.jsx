import React, { useState } from 'react';

const AdministradorUsuarios = () => {
    
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Administrar Usuarios" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Administrar Usuarios</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Administrar Usuarios</h1>
      <a href="/administrador">Ir al Dashboard</a>
      <br />
      <br />
      <header>
        <div className="admin-container">
        <a href="/mostrar-usuarios" id="generarButton">Buscar</a>
        <br />
        <br />
        <a href="/agregar-usuarios" id="generarButton">Generar</a>
        <br />
        <br />
        <a href="/modificar-usuarios" id="generarButton">Modificar</a>
        <br />
        <br />
        <a href="/eliminar-usuarios" id="generarButton">Eliminar</a>
        <br />
        <br />
        </div>
      </header>
    </>
  );
};

export default AdministradorUsuarios;