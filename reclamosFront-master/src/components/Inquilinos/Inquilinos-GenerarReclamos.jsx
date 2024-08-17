import React, { useState, useEffect } from 'react';

const InquilinosGenerarReclamos = () => {
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Obtener datos de usuario cuando el componente se monta
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Obtener la fecha actual
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    // Crear el objeto reclamo
    const reclamo = {
      title: issue,
      comment: 'Comentario predeterminado', // Modificar según tus necesidades
      date: formattedDate,
      description: description,
      image: image,
      areaComun: isToggled,
    };

    // Construir la URL del backend basada en el estado del interruptor
    const apiUrl = isToggled

    ? 'http://localhost:3000/reclamoUnidad/add'
      : 'http://localhost:3000/reclamoEdificio/add';

    // Realizar acciones adicionales, como enviar el reclamo a un servidor, etc.
    await enviarReclamoAlBackend(reclamo, apiUrl);

    // Obtener datos de usuario después de enviar el reclamo
    await fetchData();

    // Restablecer campos después de enviar el reclamo
    setIssue('');
    setDescription('');
    setImage(null);
  };

  // Manejar la carga de imágenes
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const enviarReclamoAlBackend = async (reclamo, apiUrl) => {
    try {
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reclamo),
      });
    } catch (error) {
      console.error('Error al enviar el reclamo:', error);
    }
  };

  const fetchData = async () => {
    try {
      // Reemplazar '/api/users' con la URL real para obtener datos de usuario
      const response = await fetch('/api/users');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  return (
    <>
      {/* ... (tus etiquetas meta y encabezado existentes) */}
      <main>
        <section className="properties-container">
          <h1>Generar Nuevo Reclamo</h1>
          <div className="filters">
            <form onSubmit={handleSubmit}>
              <div className="filter">
                <label htmlFor="reclamoTitle">Título</label>
                <input
                  type="text"
                  id="reclamoTitle"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                />
              </div>
              <div className="filter">
                <label htmlFor="reclamoDescription">Descripción</label>
                <input
                  type="text"
                  id="reclamoDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="filter" style={{ textAlign: 'center' }}>
                <button type="button" onClick={handleToggle}>
                  {isToggled ? 'Unidad' : 'Área Común'}
                </button>
              </div>

              <div className="filter">
                <label htmlFor="reclamoImage">Adjuntar Imagen</label>
                <input
                  type="file"
                  id="reclamoImage"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <div className="filter" style={{ textAlign: 'center' }}>
                <button type="submit" id="visualizarButton">
                  Generar Reclamo
                </button>
              </div>
            </form>
          </div>
        </section>
        <section>
          <h2>Datos de Usuario</h2>
          <ul>
            {userData.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default InquilinosGenerarReclamos;
