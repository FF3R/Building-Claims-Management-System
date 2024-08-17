import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BuscarUnidad = () => {
  const [id, setId] = useState('');
  const [unidadEncontrado, setUnidadEncontrado] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const settings = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    };

    try {
      const response = await fetch(`http://localhost:8080/usuario/searchId/${id}`, settings);

      if (!response.ok) {
        console.error('Error:', response.status);
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      setUnidadEncontrado(data);
      setError(null); // Reset the error if the search is successful
    } catch (error) {
      console.error('Error:', error);
      setUnidadEncontrado(null);
      setError('No se pudo encontrar al usuario');
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Buscar Unidades" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Buscar Unidades</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Buscar Unidades</h1>
      <br />
      <header>
        <div className="header-container">
        <a href="/administrador">Ir al Dashboard</a>
          <a href="/modificar-unidades">Actualizar Unidades</a>
          <a href="/agregar-unidades">Generar Unidades</a>
          <a href="/eliminar-unidades">Eliminar Unidades</a>
        </div>
      </header>
      <main>
        <div>
        <br />
        <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID Unidad"
              className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2'/>
            <br />
            <br />
            <a href="/administrador-reclamos" id="visualizarButton" type="submit" id="visualizarButton">
              Buscar Unidad
            </a>
            <br />
            <br />
          </form>

          {error && <p>{error}</p>}

          {unidadEncontrado && (
            <div className="user-profile">
              <h2>Unidad</h2>
              <div>
                <p>ID: {unidadEncontrado.id}</p>
                <p>Nombre: {unidadEncontrado.nombre}</p>
                <p>Apellido: {unidadEncontrado.apellido}</p>
                <p>Nombre Usuario: {unidadEncontrado.nombre_usuario}</p>
                <p>Telefono: {unidadEncontrado.telefono}</p>
                <p>Tipo de Usuario: {unidadEncontrado.tipo}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default BuscarUnidad;
