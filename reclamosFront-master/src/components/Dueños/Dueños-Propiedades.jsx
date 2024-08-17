import React, { useState, useEffect } from 'react';

const DueñosVerReclamosPendientes = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make an HTTP GET request using fetch
      const response = await fetch('/api/users');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <header>
        <div className="header-container">
          <h1>Asignacion de Usuarios</h1>
          <a href="/duenos">Ir al Dashboard</a>
        </div>
      </header>
      <main>
        <section className="properties-container">
          <div className="filters">
            <form action="#">
              <div className="filter">
                <label htmlFor="date">Nombre Usuario </label>
                <input type="text" id="date" />
              </div>

              <div className="filter">
                <label htmlFor="floor">Unidad</label>
                <input type="number" id="floor" />
              </div>

              <div className="filter" style={{ textAlign: 'center' }}>
                <button type="button" onClick={handleToggle}>
                  {isToggled ? 'Asignar' : 'Designar'}
                </button>
              </div>

              <button type="submit">Finalizar</button>
            </form>
          </div>
        </section>
        <section>
          <h2>User Data</h2>
          <ul>
            {userData.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DueñosVerReclamosPendientes;
