import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BuscarEdificios = () => {
  const [id, setId] = useState('');
  const [edificioEncontrado, setEdificioEncontrado] = useState(null);
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
      const response = await fetch(`http://localhost:8080/edificio/searchId/${id}`, settings);

      if (!response.ok) {
        console.error('Error:', response.status);
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      setEdificioEncontrado(data);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setEdificioEncontrado(null);
      setError('No se pudo encontrar el edificio');
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Buscar Edificio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Buscar Edificio</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Buscar Edificio</h1>
      <br />
      <header>
        <div className="header-container">
        <a href="/administrador">Ir al Dashboard</a>
          <a href="/modificar-edificios">Actualizar Edificio</a>
          <a href="/agregar-edificios">Generar Edificio</a>
          <a href="/eliminar-edificios">Eliminar Edificio</a>
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
              placeholder="ID Edificio"
              className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2'
            />
            <br />
            <br />
            <a  id="visualizarButton">
              Buscar Edificio
            </a>
            <br />
            <br />
          </form>

          {error && <p>{error}</p>}

          {edificioEncontrado && (
            <div className="user-profile">
              <h2>Unidad</h2>
              <div>
                <p>ID: {edificioEncontrado.id}</p>
                <p>Nombre: {edificioEncontrado.nombre}</p>
                <p>Apellido: {edificioEncontrado.apellido}</p>
                <p>Nombre Usuario: {edificioEncontrado.nombre_usuario}</p>
                <p>Telefono: {edificioEncontrado.telefono}</p>
                <p>Tipo de Usuario: {edificioEncontrado.tipo}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default BuscarEdificios;
