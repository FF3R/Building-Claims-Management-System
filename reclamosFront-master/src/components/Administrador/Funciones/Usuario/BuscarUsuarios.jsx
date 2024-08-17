import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BuscarUsuario = () => {
  const [id, setId] = useState('');
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
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
      setUsuarioEncontrado(data);
      setError(null); // Restablecer el error si la búsqueda tiene éxito
    } catch (error) {
      console.error('Error:', error);
      setUsuarioEncontrado(null);
      setError('No se pudo encontrar al usuario'); 
    }
  };

  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="description" content="Buscar Usuarios" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Buscar Usuarios</title>
    <link rel="stylesheet" href="App.css" />
    <h1>Buscar Usuarios</h1>
    <br />
    <header>
      <div className="header-container">
      <a href="/administrador">Ir al Dashboard</a>
        <a href="/modificar-usuarios">Modificar Usuarios</a>
        <a href="/agregar-usuarios">Generar Usuarios</a>
        <a href="/eliminar-usuarios">Eliminar Usuarios</a>
      </div>
    </header>
    <main>
    <div>
      <form onSubmit={handleSubmit}>
      <br />
        <br />
       <input type="text"  value={id} onChange={(e) => setId(e.target.value)} className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' placeholder="ID Usuario"/>
        <br />
        <br />
        <a type="submit" id="visualizarButton">Buscar Usuario</a>
        <br />
        <br />
      </form>

      {error && <p>{error}</p>}

      {usuarioEncontrado && (
        <div className="user-profile">
          <h2>Perfil de Usuario</h2>
          <div>
            <p>ID: {usuarioEncontrado.id}</p>
            <p>Nombre: {usuarioEncontrado.nombre}</p>
            <p>Apellido: {usuarioEncontrado.apellido}</p>
            <p>Nombre Usuario: {usuarioEncontrado.nombre_usuario}</p>
            <p>Telefono: {usuarioEncontrado.telefono}</p>
            <p>Tipo de Usuario: {usuarioEncontrado.tipo}</p>
          </div>
        </div>
      )}
    </div>
  </main>
  </>
  );
};

export default BuscarUsuario;
