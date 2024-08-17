import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ModificarEdificios = () => {
  const location = useLocation();
  const edi = JSON.parse(sessionStorage.getItem('update'));

  // Provide default values if edi is null
  const [ciudad, setCiudad] = useState(edi?.ciudad || '');
  const [postal, setPostal] = useState(edi?.codigoPostal || '');
  const [direccion, setDireccion] = useState(edi?.direccion || '');
  const [pais, setPais] = useState(edi?.pais || '');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ciudad || !postal || !direccion || !pais) {
      window.alert('FALTA COMPLETAR CAMPOS');
      return;
    }

    const body = { ciudad, codigoPostal: postal, direccion, pais };

    setCiudad('');
    setPostal('');
    setDireccion('');
    setPais('');

    const settings = {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    };

    try {
      const response = await fetch(`http://localhost:8080/api/edificio/${edi.idEdificio}`, settings);

      if (!response.ok) {
        alert('ERROR', response.status);
      } else {
        console.log('SE ENVIO LA INFO');
      }

      sessionStorage.removeItem('update');
      navigate('/edificio', { state: location.state });
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };



  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Actualizar Edificio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Actualizar Edificio</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Actualizar Edificio</h1>
      
      <br />
      <header>
        <div className="header-container">
        <a href="/administrador">Ir al Dashboard</a>
          <a href="/mostrar-edificios">Buscar Edificio</a>
          <a href="/agregar-edificios">Generar Edificio</a>
          <a href="/eliminar-edificios">Eliminar Edificio</a>
        </div>
      </header>
      <main>
      <section className="properties-container">
                    <div className="flex justify-center">
                        <div className="flex mx-24 max-lg:mx-8 justify-around max-lg:flex-col gap-20 max-md:gap-3 items-center w-">
                            <div className="flex flex-col text-center p-8 justify-between gap-10 rounded-3xl shadow-card max-lg:w-full">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Ingrese la ciudad"
                      value={ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    />
                    <input
                      type="text"
                      placeholder="Ingrese el codigo postal"
                      value={postal}
                      onChange={(e) => setPostal(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    />
                    <input
                      type="text"
                      placeholder="Ingrese la direccion"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    />
                    <input
                      type="text"
                      placeholder="Ingrese el pais"
                      value={pais}
                      onChange={(e) => setPais(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    />

                    <a  id="visualizarButton">
                      Actualizar
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

export default ModificarEdificios;
