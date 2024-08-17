import React from 'react';

const InquilinosVerPropiedades = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Frontend Mentor - Pricing Component With Toggle"
      />
      <meta
        name="keywords"
        content="Pricing Component With Toggle, Frontend Mentor"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link rel="stylesheet" href="styles.css" />
      <title>Inquilino</title>
      <header>
      <div className="header-container">
        <h1>Sus Propiedades</h1>
        <a href="/inquilinos">Ir al Dashboard</a>
        </div>
      </header>
      <main>
        <section className="properties-container">
          <h1>Lista de Propiedades</h1>
          <div className="filters">
            
            <form action="#">
              <div className="filter">
                <label htmlFor="date">Fecha</label>
                <input type="date" id="date" />
              </div>
              <div className="filter">
                <label htmlFor="address">Dirección</label>
                <input type="text" id="address" />
              </div>
              <div className="filter">
                <label htmlFor="floor">Piso</label>
                <input type="number" id="floor" min="1"/>
              </div>
              <button type="submit">Filtrar</button>
            </form>
          </div>
          <ul className="properties">
            <li className="property">
              <img src="images/property1.jpg" alt="Property 1 Image" />
              <div className="info">
                <h2>Departamento Moderno en Centro</h2>
                <p>Dirección: Av. Corrientes 1234</p>
                <p>Precio: $20,000</p>
                <button>Ver Detalles</button>
              </div>
            </li>
            <li className="property">
              <img src="images/property2.jpg" alt="Property 2 Image" />
              <div className="info">
                <h2>Casa Amplia en Zona Residencial</h2>
                <p>Dirección: Calle Mendoza 5678</p>
                <p>Precio: $35,000</p>
                <button>Ver Detalles</button>
              </div>
            </li>
            <li className="property">
              <img src="images/property3.jpg" alt="Property 3 Image" />
              <div className="info">
                <h2>Estudio Confortable en Barrio Tranquilo</h2>
                <p>Dirección: Calle San Martín 9012</p>
                <p>Precio: $15,000</p>
                <button>Ver Detalles</button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default InquilinosVerPropiedades;
