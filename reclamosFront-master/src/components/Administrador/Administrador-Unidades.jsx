import React, { useState } from 'react';

const AdministradorUnidades = () => {

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Administrar Unidades" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Administrar Unidades</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Administrar Unidades</h1>
      <a href="/administrador">Ir al Dashboard</a>
      <br />
      <br />
      <header>
        <div className="admin-container">
        <a href="/mostrar-unidades" id="generarButton">Buscar</a>
        <br />
        <br />
        <a href="/agregar-unidades" id="generarButton">Generar</a>
        <br />
        <br />
        <a href="/modificar-unidades" id="generarButton">Modificar</a>
        <br />
        <br />
        <a href="/eliminar-unidades" id="generarButton">Eliminar</a>
        <br />
        <br />
        </div>
      </header>
    </>
  );
};

export default AdministradorUnidades;