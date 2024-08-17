import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EliminarUsuarios = () => {
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
      const response = await fetch(`http://localhost:8080/usuario/delete/${id}`, settings);

      if (!response.ok) {
        console.error('Error:', response.status);
        throw new Error('Network response was not ok.');
      }

      navigate('/administrador-usuarios'); // Redirigir a la página de administrador después de eliminar
    } catch (error) {
      console.error('Error:', error);
      setError('No se pudo eliminar al usuario'); // Establecer mensaje de error si falla la eliminación
    }
  };

  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="description" content="Eliminar Usuarios" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eliminar Usuarios</title>
    <link rel="stylesheet" href="App.css" />
    <h1>Eliminar Usuarios</h1>
    <br />
    <header>
      <div className="header-container">
      <a href="/administrador">Ir al Dashboard</a>
      <a href="/mostrar-usuarios">Mostrar Usuarios</a>
      <a href="/modificar-usuarios">Modificar Usuarios</a>
      <a href="/agregar-usuarios">Generar Usuarios</a>
      </div>
    </header>
    <main>
    <div>
    <br />
        <br />
      <form onSubmit={handleSubmit}>
        <input type="text"  value={id} onChange={(e) => setId(e.target.value)} className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' placeholder="ID Usuario"/>
        <br />
        <br />
        <a id="visualizarButton">Eliminar Usuario</a>
      </form>

      {error && <p>{error}</p>}
    </div>
    </main>
    </>
  );
};

export default EliminarUsuarios;
