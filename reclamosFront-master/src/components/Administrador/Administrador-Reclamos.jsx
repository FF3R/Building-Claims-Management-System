import React, { useState, useEffect } from 'react';

const DueñosVerReclamosPendientes = () => {
  const [reclamos, setReclamos] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/reclamos/getAll');
        const data = await response.json();
        setReclamos(data); // Assuming your API returns an array of reclamos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once when the component mounts

  return (
    <div>
      <header>
        <div className="header-container">
          <h1>¡A Resolver Reclamos!</h1>
          <a href="/administrador">Ir al Dashboard</a>
        </div>
      </header>
      <main>
        <section className="properties-container">
        

          <div className="filters">
            <form action="#">
            <div className="filters">
            <label htmlFor="select">Estado</label>
            <select id='select' type='select' onChange={(e) => handleChange(e.target.value)}>
                <option value="null">Todos</option>
                <option value="nuevo">Nuevo</option>
                <option value="Abierto">Abierto</option>
                <option value="en proceso">En Proceso</option>
                <option value="desestimado">Desestimado</option>
                <option value="anulado">Anulado</option>
                <option value="terminado">Terminado</option>
        </select>
        </div>
              <div className="filter">
                <label htmlFor="date">Fecha</label>
                <input type="date" id="date" />
              </div>

              <div className="filter">
                <label htmlFor="floor">Unidad</label>
                <input type="number" id="floor" />
              </div>
              <button type="submit">Filtrar</button>
            </form>
          </div>
          <ul className="properties">
            {reclamos.map((reclamo, index) => (
              <li key={index} className="property">
                <div className="info">
                  <h2>{`Reclamo ${index + 1}: ${reclamo.title}`}</h2>
                  <p>{`Fecha: ${reclamo.date}`}</p>
                  <p>{`Edificio: ${reclamo.edificio}`}</p>
                  <p>{`Unidad: ${reclamo.unidad}`}</p>
                  <p>{`Descripción: ${reclamo.descripcion}`}</p>
                  {<button className="visualizarButton" onClick={() => handleActualizar(r)}>Resolver Reclamo</button>} 
                  {<button className="visualizarButton" onClick={() => handleEliminar(r.idReclamo, r.tipo)}>Eliminar</button>}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DueñosVerReclamosPendientes;
