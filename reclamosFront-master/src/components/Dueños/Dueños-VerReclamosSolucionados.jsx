import React, { useEffect, useState } from 'react';

const DueñosVerReclamosSolucionados = () => {
  const [reclamosList, setReclamosList] = useState([]);

  useEffect(() => {
    // Reemplaza 'TU_ENDPOINT_DE_API' con la URL real de tu API
    fetch('TU_ENDPOINT_DE_API')
      .then((response) => response.json())
      .then((data) => setReclamosList(data))
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []); // El array de dependencias vacío asegura que este efecto se ejecute una vez, similar a componentDidMount

  return (
    <div>
      <header>
        <div className="header-container">
          <h1> Reclamos Resueltos</h1>
          <a href="/duenos">Ir al Dashboard</a>
        </div>
      </header>
      <main>
        <section className="properties-container">
          <div className="filters">
            <form action="#">
              <div className="filter">
                <label htmlFor="date">Fecha</label>
                <input type="date" id="date" />
              </div>
              <div className="filter">
                <label htmlFor="floor">Unidad</label>
                <input type="number" id="floor" min="1" />
              </div>
              <button type="submit">Filtrar</button>
            </form>
          </div>
          <ul className="properties">
            {reclamosList.map((reclamo) => (
              <li key={reclamo.id} className="property">
                <div className="info">
                  <h2>{`Reclamo ${reclamo.id}: ${reclamo.title}`}</h2>
                  <p>{`Fecha: ${reclamo.date}`}</p>
                  <p>{`Edificio: ${reclamo.edificio}`}</p>
                  <p>{`Unidad: ${reclamo.unidad}`}</p>
                  <p>{`Descripción: ${reclamo.descripcion}`}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DueñosVerReclamosSolucionados;
