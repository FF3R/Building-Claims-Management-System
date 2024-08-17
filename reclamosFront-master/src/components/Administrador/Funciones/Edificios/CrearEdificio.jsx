import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CrearEdificios = () => {
  const [ciudad, setCiudad] = useState('');
  const [postal, setPostal] = useState('');
  const [direccion, setDireccion] = useState('');
  const [pais, setPais] = useState('');

  const location = useLocation(); // Use the 'useLocation' hook to get the location object
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { ciudad, codigoPostal: postal, direccion, pais };

    setCiudad('');
    setPostal('');
    setDireccion('');
    setPais('');

    if (body.ciudad === '' || body.postal === '' || body.direccion === '' || body.pais === '') {
      window.alert('FALTA COMPLETAR CAMPOS');
      return null;
    }

    const settings = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    };

    try {
      const response = await fetch('http://localhost:8080/api/edificio', settings);

      if (!response.ok) {
        alert('ERROR ' + response.status);
      } else {
        console.log('SE ENVIO LA INFO');
      }

      navigate('/edificio', { state: location.state }); // Use the 'navigate' function with 'location.state'
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Generar Edificios" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Generar Edificios</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Generar Edificios</h1>
      <br />
      <header>
        <div className="header-container">
        <a href="/administrador">Ir al Dashboard</a>
          <a href="/mostrar-edificios">Buscar Edificios</a>
          <a href="/modificar-edificios">Modificar Edificios</a>
          <a href="/eliminar-edificios">Eliminar Edificios</a>
        </div>
      </header>
      <main>
        <section className="properties-container">
          <div className="flex justify-center">
            <div className="flex mx-24 max-lg:mx-8 justify-around max-lg:flex-col gap-20 max-md:gap-3 items-center w-">
              <div className="flex flex-col text-center p-8 justify-between gap-10 rounded-3xl shadow-card max-lg:w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ingresa la ciudad"
                      value={ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    />
                    <input
                      type="text"
                      placeholder="Ingresa el codigo postal"
                      value={postal}
                      onChange={(e) => setPostal(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    />
                    <input
                      type="text"
                      placeholder="Ingresa la direccion"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    />
                    <input
                      type="text"
                      placeholder="Ingresa el pais"
                      value={pais}
                      onChange={(e) => setPais(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    />
                  </div>

                  <a id="visualizarButton" className='mt-5 p-2 bg-coral text-white text-lg rounded-xl w-full font-bold'>
                    Agregar Edificio
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CrearEdificios;
