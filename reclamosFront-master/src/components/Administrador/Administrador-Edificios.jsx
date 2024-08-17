import React, { useState } from 'react';

const AdministradorEdificios = () => {

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Administrar Edificios" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Administrar Edificios</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Administrar Edificios</h1>
      <a href="/administrador">Ir al Dashboard</a>
      <br />
      <br />
      <header>
        <div className="admin-container">
        <a href="/mostrar-edificios" id="generarButton">Buscar</a>
        <br />
        <br />
        <a href="/agregar-edificios" id="generarButton">Generar</a>
        <br />
        <br />
        <a href="/modificar-edificios" id="generarButton">Modificar</a>
        <br />
        <br />
        <a href="/eliminar-edificios" id="generarButton">Eliminar</a>
        <br />
        <br />
        </div>
      </header>
    </>
  );
};

export default AdministradorEdificios;
