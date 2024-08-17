import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EliminarEdificios = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const settings = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    };

    try {
      const response = await fetch(`http://localhost:8080/edificio/delete/${id}`, settings);

      if (!response.ok) {
        console.error('Error:', response.status);
        throw new Error('Network response was not ok.');
      }

      navigate('/administrador-edificios'); 
    } catch (error) {
      console.error('Error:', error);
      setError('No se pudo eliminar el edificio'); 
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Eliminar Edificio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Eliminar Edificio</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Eliminar Edificio</h1>
      <br />
      <header>
        <div className="header-container">
        <a href="/administrador">Ir al Dashboard</a>
          <a href="/mostrar-edificios">Buscar Edificio</a>
          <a href="/agregar-edificios">Generar Edificio</a>
          <a href="/modificar-edificios">Modificar Edificio</a>
        </div>
      </header>
      <main>
    <div>
    <br />
        <br />
      <form onSubmit={handleSubmit}>
      <input type="text"  value={id} onChange={(e) => setId(e.target.value)} className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' placeholder="ID Edificio"/>
      <br />
        <br />
        <a  id="visualizarButton">Eliminar Edificio</a>
      </form>

      {error && <p>{error}</p>}
    </div>
    </main>
    </>
  );
};

export default EliminarEdificios;