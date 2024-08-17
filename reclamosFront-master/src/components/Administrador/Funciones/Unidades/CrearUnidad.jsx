import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AgregarUnidad = () => {
  const [piso, setPiso] = useState('');
  const [depto, setDepto] = useState('');
  const [estado, setEstado] = useState('');
  
  const [edificios, setEdificios] = useState([]);
  const [edificio, setEdificio] = useState({});
  
  const [duenos, setDuenos] = useState([]);
  const [dueno, setDueno] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const settings = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    };

    fetch('http://localhost:8080/api/duenos', settings)
      .then((response) => {
        if (!response.ok) {
          console.log('ALGO PASO MAL', response.status);
        }
        return response.json();
      })
      .then((data) => {
        setDuenos(data);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });

    fetch('http://localhost:8080/api/edificios', settings)
      .then((response) => {
        if (!response.ok) {
          console.log('ALGO PASO MAL', response.status);
        }
        return response.json();
      })
      .then((data) => {
        setEdificios(data);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (piso === '' || depto === '' || estado === 'null' || dueno === '' || edificio === '') {
      window.alert('Faltan parametros a ingresar');
      return null;
    }

    const nuevaUnidad = {
      idDueno: dueno,
      piso,
      departamento: depto,
      estado,
      idEdificio: edificio,
    };

    setPiso('');
    setDepto('');
    setEstado('');
    setDueno('');
    setEdificio('');

    const settings = {
      method: 'POST',
      body: JSON.stringify(nuevaUnidad),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    };

    await fetch('http://localhost:8080/api/unidad', settings)
      .then((response) => {
        if (!response.ok) {
          console.log('ALGO PASO MAL', response.status);
        } else {
          navigate('/unidad');
        }
        return response.json();
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Generar Unidad" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Generar Unidades</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Generar Unidades</h1>
      <br />
      <header>
        <div className="header-container">
        <a href="/administrador">Ir al Dashboard</a>
          <a href="/mostrar-unidades">Buscar Unidades</a>
          <a href="/modificar-unidades">Modificar Unidades</a>
          <a href="/eliminar-unidades">Eliminar Unidades</a>
        </div>
      </header>
      <main>
        <section className="properties-container">
          <div className="flex justify-center">
            <div className="flex mx-24 max-lg:mx-8 justify-around max-lg:flex-col gap-20 max-md:gap-3 items-center w-">
              <div className="flex flex-col text-center p-8 justify-between gap-10 rounded-3xl shadow-card max-lg:w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <select
                      onChange={(e) => setDueno(e.target.value)}
                      className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                    >
                      <option value="null">Seleccione Dueño</option>
                      {duenos.map((dueno) => (
                        <option key={dueno.idDueno} value={dueno.idDueno}>
                          {dueno.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                  <input type="text" placeholder="Ingresa el piso" value={piso} onChange={(e) => setPiso(e.target.value)} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"/> </div>
                  <div className="flex flex-col gap-2"><input type="text" placeholder="Ingresa el departamento" value={depto} onChange={(e) => setDepto(e.target.value)}className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"/></div>

                  <div className="flex flex-col gap-2"><select onChange={(e) => setEstado(e.target.value)} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2">
            <option value="null">Selcione estado</option>
            <option value="Alquilado">Alquildado/a</option>
            <option value="Habitado">Habitado/a</option>
          </select>
                  </div>
                  <div className="flex flex-col gap-2"><select onChange={(e) => setEdificio(e.target.value)} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2">
            <option value="null">Selecione edificio</option>
            {edificios.map(edi => (<option value={edi.idEdificio}>{edi.direccion}</option>))}
             </select></div>
             <a type="submit" id="visualizarButton">Crear Unidad</a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AgregarUnidad;
